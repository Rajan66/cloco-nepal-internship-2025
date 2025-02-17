from django.db.models import F
from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic

from .models import Choice, Question

# def index(request):
#     # orders by recent first and only shows the first 5 items
#     latest_question_list = Question.objects.order_by("-published_date")[:5]
#     context = {"latest_question_list": latest_question_list}
#     return render(request, "main/index.html", context)


# def details(request, question_id):
#     try:
#         question = Question.objects.get(pk=question_id)
#     except Question.DoesNotExist:
#         raise Http404("Question does not exist")
#     return render(request, "main/details.html", {"question": question})


# def results(request, question_id):
#     question = get_object_or_404(Question, pk=question_id)
#     return render(request, "main/results.html", {"question": question})


def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST["choice"])
    except (KeyError, Choice.DoesNotExist):
        return render(
            request,
            "main/detail.html",
            {"question": question, "error_message": "You didn't select a choice"},
        )
    else:
        selected_choice.votes = F("votes") + 1
        selected_choice.save()
        # args expects a tuple so, we have to put ',' even if there is one element
        # reverse is used to redirect to a view without hardcoding the url
        return HttpResponseRedirect(reverse("main:results", args=(question.id,)))


class IndexView(generic.ListView):
    template_name = "mains/index.html"
    context_object_name = "latest_question_list"

    def get_queryset(self):
        return Question.objects.order_by("-published_date")[:5]


class DetailsView(generic.DetailView):
    model = Question
    template_name = "main/details.html"


class ResultsView(generic.DetailView):
    model = Question
    template_name = "main/results.html"

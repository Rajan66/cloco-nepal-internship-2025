from django.http import Http404, HttpResponse
from django.shortcuts import get_object_or_404, render

from .models import Question


def index(request):
    # orders by recent first and only shows the first 5 items
    latest_question_list = Question.objects.order_by("-published_date")[:5]
    context = {"latest_question_list": latest_question_list}
    return render(request, "main/index.html", context)


def details(request, question_id):
    try:
        question = Question.objects.get(pk=question_id)
    except Question.DoesNotExist:
        raise Http404("Question does not exist")
    return render(request, "main/details.html", {"question": question})


def results(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, "main/results.html", {"question": question})


def vote(request, question_id):
    response = "You're voting on question:"
    return HttpResponse(f"{response} {question_id}")

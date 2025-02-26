from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render
from django.contrib import messages
from .models import Book, Category
from .forms import BookCreationForm


def index(request):
    return render(request, "index.html", context={})


def success(request):
    return render(request, "success.html", context={})


def create_book(request):
    categories = Category.objects.all()
    print(categories)
    if request.method == "POST":
        # this validates the received form data
        form = BookCreationForm(request.POST)

        # if the form is valid save the data
        if form.is_valid():
            title = form.cleaned_data["title"]
            isbn = form.cleaned_data["isbn"]
            description = form.cleaned_data["description"]
            page_count = form.cleaned_data["page_count"]
            price = form.cleaned_data["price"]
            published_date = form.cleaned_data["published_date"]

            book = Book(
                title=title,
                isbn=isbn,
                description=description,
                page_count=page_count,
                price=price,
                published_date=published_date,
            )
            print(book)
            book.save()

            messages.success(
                request, f'Book {book.title} created successfully')
            return HttpResponseRedirect('/book/success/')
        # else:
        #     print(form.errors)
        #     return HttpResponse("Error error, something went wrong")
    else:
        form = BookCreationForm()
    return render(request, "home.html", {"form": form, "categories": categories})

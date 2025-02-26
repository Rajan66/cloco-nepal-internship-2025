from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render
from django.contrib import messages
from .models import Book, Category
from .forms import BookCreationForm


def home(request):
    books = Book.objects.all()
    return render(request, "home.html", context={"books": books})


def success(request):
    return render(request, "success.html", context={})


def book_form(request):
    categories = Category.objects.all()
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
            # category = form.cleaned_data["category"]

            book = Book(
                title=title,
                isbn=isbn,
                description=description,
                page_count=page_count,
                price=price,
                published_date=published_date,
                # category=category,
            )
            print(book)
            book.save()

            messages.success(
                request, f'Book {book.title} created successfully')
            return HttpResponseRedirect('/book/success/')
    else:
        form = BookCreationForm()
    return render(request, "book_form.html", {"form": form, "categories": categories})

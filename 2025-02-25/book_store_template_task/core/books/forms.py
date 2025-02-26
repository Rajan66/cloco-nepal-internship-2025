from django import forms
from .models import Book, Category


class BookCreationForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = ("title", "isbn", "description",
                  "page_count", "price", "published_date", "category")


class BookChangeForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = ("title", "isbn", "description",
                  "page_count", "price", "published_date", "category")


class CategoryCreationForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = ("title", "description")


class CategoryChangeForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = ("title", "description")

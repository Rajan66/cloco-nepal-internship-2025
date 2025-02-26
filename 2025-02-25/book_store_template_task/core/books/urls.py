from django.urls import path
from books.views import index, success, create_book

urlpatterns = [
    path('', index, name="index"),
    path('home/', create_book, name="create_book"),
    path('success/', success, name="success")
]

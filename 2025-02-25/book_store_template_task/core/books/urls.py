from django.urls import path
from books.views import *

urlpatterns = [
    path('', home, name="home"),
    path('form/', book_form, name="book_form"),
    path('success/', success, name="success")
]

from django.urls import path
from .views import CategoryList,ReviewList

urlpatterns=[
    path('category/',CategoryList.as_view(),name="category-list"),
    path('reviews/',ReviewList.as_view(),name="review-list"),
    # path('<str:pk>/',BookDetail.as_view(),name="book-detail"),
]

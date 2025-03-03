from django.urls import path

from books.views import (
    BookDetail,
    BookList,
    CategoryDetail,
    CategoryList,
    ReviewDetail,
    ReviewList,
)

urlpatterns = [
    path("", BookList.as_view(), name="book-list"),
    path("<str:pk>/", BookDetail.as_view(), name="book-detail"),
    path(
        "category/", CategoryList.as_view(), name="category-list"
    ),  # doesn't work.....
    path("category", CategoryList.as_view(), name="category-list"),  # doesn't work.....
    path("category/<str:pk>/", CategoryDetail.as_view(), name="category-detail"),
    path("reviews", ReviewList.as_view(), name="review-list"),
    path("reviews/<str:pk>/", ReviewDetail.as_view(), name="review-detail"),
]

from django.urls import path
from books.views import CategoryList, CategoryDetail, BookList, BookDetail

urlpatterns = [
    path('category/', CategoryList.as_view(), name="category-list"),
    path('category/<str:pk>', CategoryDetail.as_view(), name="category-detail"),
    path('', BookList.as_view(), name="book-list"),
    path('<str:pk>/', BookDetail.as_view(), name="book-detail")
    # path('reviews/', ReviewList.as_view(), name="review-list"),
    # path('reivews/<str:pk>/', ReviewDetail.as_view(), name="review-detail")
]

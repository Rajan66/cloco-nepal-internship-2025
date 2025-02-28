from django.urls import path
from books.views import CategoryList, CategoryDetail

urlpatterns = [
    path('category/', CategoryList.as_view(), name="category-list"),
    path('category/<str:pk>', CategoryDetail.as_view(), name="category-detail")
]

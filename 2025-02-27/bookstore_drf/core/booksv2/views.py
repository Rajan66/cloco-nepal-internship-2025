from books.models import Book, Category, Review
from books.serializers import BookSerializer, CategorySerializer, ReviewSerializer
from core.utils.pagination import BookCategoryPagination
from rest_framework.filters import OrderingFilter, SearchFilter

# from rest_framework.pagination import LimitOffsetPagination
from rest_framework.generics import GenericAPIView, mixins
from rest_framework.response import Response


class CategoryList(GenericAPIView):
    serializer_class = CategorySerializer
    # pagination_class = LimitOffsetPagination # uses limit and offset in params instead of page_size and page
    # custom pagination to show 5 items per page
    pagination_class = BookCategoryPagination
    filter_backends = [OrderingFilter, SearchFilter]
    search_fields = ["title"]
    ordering_fields = ["title"]
    ordering = ["title"]
    queryset = Category.objects.all()  # used to return object from this view

    def get(self, request):
        query = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(query)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = CategorySerializer(query, many=True)
        return Response(serializer.data)


class ReviewList(GenericAPIView):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
    filter_backends = [OrderingFilter, SearchFilter]
    search_fields = ["rating"]
    ordering_fields = ["rating"]
    ordering = ["-rating"]

    def get(self, request):
        query = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(query)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(query, many=True)
        return Response(serializer.data)


class BookList(mixins.ListModelMixin, mixins.CreateModelMixin, GenericAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from books.models import Category, Book, Review
from books.serializers import CategorySerializer, BookSerializer, ReviewSerializer


class CategoryList(APIView):
    def get(self, request):
        categories = Category.objects.all()
        if not categories.exists():
            return Response([], status=status.HTTP_200_OK)
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryDetail(APIView):
    def get_object(self, pk):
        try:
            return Category.objects.get(pk=pk)
        except:
            raise Http404

    def get(self, request, pk):
        category = self.get_object(pk=pk)
        serializer = CategorySerializer(category)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        category = self.get_object(pk=pk)
        print(f"Request data:===========>{request.data}")
        serializer = CategorySerializer(
            category, data=request.data, partial=True)
        print(f"Serializer:===========>{serializer}")
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        category = self.get_object(pk=pk)
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class BookList(APIView):
    def get(self, request):
        books = Book.objects.all()
        if not books.exists():
            return Response([], status=status.HTTP_200_OK)
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BookDetail(APIView):
    def get_object(self, pk):
        try:
            return Book.objects.get(pk=pk)
        except:
            raise Http404

    def get(self, request, pk):
        book = self.get_object(pk=pk)
        print(book)
        serializer = BookSerializer(book)
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        book = self.get_object(pk=pk)
        serializer = BookSerializer(book, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        book = self.get_object(pk=pk)
        book.delete()
        return Response(status=status.HTTP_404_NOT_FOUND)

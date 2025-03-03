from django.contrib.auth.models import User
from rest_framework import serializers, status
from rest_framework.exceptions import APIException
from rest_framework.validators import ValidationError
from users.models import Author, Publisher

from books.models import Book, Category, Review


class ValidationError409(APIException):
    status_code = status.HTTP_409_CONFLICT


class CategorySerializer(serializers.Serializer):
    id = serializers.CharField(max_length=22, read_only=True)
    title = serializers.CharField(max_length=100)
    description = serializers.CharField()
    created_at = serializers.DateTimeField(read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        return Category.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get("title", instance.title)
        instance.description = validated_data.get("description", instance.description)
        instance.save()
        return instance

    def validate_title(self, value):
        if Category.objects.filter(title=value):
            raise ValidationError409(detail="Cannot insert duplicate title")
        return value


class BookSerializer(serializers.Serializer):
    id = serializers.CharField(max_length=22, read_only=True)
    title = serializers.CharField(max_length=255)
    publisher = serializers.PrimaryKeyRelatedField(
        queryset=Publisher.objects.all(), many=False, read_only=False
    )
    category = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), many=True, read_only=False
    )
    author = serializers.PrimaryKeyRelatedField(
        many=False, queryset=Author.objects.all(), read_only=False
    )
    isbn = serializers.CharField(max_length=30)
    description = serializers.CharField()
    page_count = serializers.IntegerField()
    price = serializers.DecimalField(decimal_places=2, max_digits=10)
    published_date = serializers.DateField()

    def create(self, validated_data):
        categories = validated_data.pop("category")
        book = Book.objects.create(**validated_data)
        for category in categories:
            book.category.add(category)
        book.save()
        return book

    def update(self, instance, validated_data):
        instance.title = validated_data.get("title", instance.title)
        instance.publisher = validated_data.get("publisher", instance.publisher)
        instance.author = validated_data.get("author", instance.author)
        instance.isbn = validated_data.get("isbn", instance.isbn)
        instance.description = validated_data.get("description", instance.description)
        instance.page_count = validated_data.get("page_count", instance.page_count)
        instance.price = validated_data.get("price", instance.price)
        instance.published_date = validated_data.get(
            "published_date", instance.published_date
        )
        instance.save()
        return instance


class ReviewSerializer(serializers.Serializer):
    id = serializers.CharField(max_length=22, read_only=True)
    book = serializers.PrimaryKeyRelatedField(
        queryset=Book.objects.all(), many=False, read_only=False
    )
    user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), many=False, read_only=False
    )
    rating = serializers.IntegerField()

    def create(self, validated_data):
        return Review.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.user = validated_data.get("user", instance.user)
        instance.book = validated_data.get("book", instance.book)
        instance.rating = validated_data.get("rating", instance.rating)
        instance.save()
        return instance

    def validate_rating(self, value):
        print(value)
        if value < 1 or value > 5:
            raise ValidationError(detail="Rating should be between 1 to 5")
        return value

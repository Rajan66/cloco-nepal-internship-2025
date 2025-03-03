from rest_framework import serializers
from rest_framework.validators import ValidationError
from rest_framework import status
from rest_framework.exceptions import APIException
from books.models import Book, Category, Review
from users.models import Publisher, Author
from django.contrib.auth.models import User


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
        print(validated_data.get('title'))
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get(
            'description', instance.description)
        instance.save()
        return instance

    def validate_title(self, value):
        if Category.objects.filter(title=value):
            raise ValidationError409(
                detail="Cannot insert duplicate title")
        return value


class BookSerializer(serializers.Serializer):
    id = serializers.CharField(max_length=22, read_only=True)
    title = serializers.CharField(max_length=255)
    publisher = serializers.PrimaryKeyRelatedField(
        queryset=Publisher.objects.all(), many=False, read_only=False)
    category = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), many=True, read_only=False)
    author = serializers.PrimaryKeyRelatedField(
        many=False, queryset=Author.objects.all(), read_only=False)
    isbn = serializers.CharField(max_length=30)
    description = serializers.CharField()
    page_count = serializers.IntegerField()
    price = serializers.DecimalField(decimal_places=2, max_digits=10)
    published_date = serializers.DateField()

    def create(self, validated_data):
        categories = validated_data.pop('category')
        book = Book.objects.create(**validated_data)
        for category in categories:
            book.category.add(category)
        return book

    def update(self, instance, validated_data):
        return Book.objects.update(instance, validated_data)


class ReviewSerializer(serializers.Serializer):
    id = serializers.CharField(max_length=22, read_only=True)
    book = serializers.RelatedField(
        many=False, queryset=Book.objects.all(), read_only=False)
    user = serializers.RelatedField(
        many=False, queryset=User.objects.all(), read_only=False)
    rating = serializers.IntegerField()

    def create(self, validated_data):
        return Review.objects.create(validated_data)

    def update(self, instance, validated_data):
        return Review.objects.update(instance, validated_data)

from rest_framework import serializers
from rest_framework.validators import ValidationError
from rest_framework import status
from rest_framework.exceptions import APIException
from books.models import Book, Category, Review


class ValidationError409(APIException):
    status_code = status.HTTP_409_CONFLICT


class CategorySerializer(serializers.Serializer):
    id = serializers.CharField(max_length=22, read_only=True)
    title = serializers.CharField(max_length=100)
    description = serializers.CharField()
    # created_at = serializers.DateTimeField(read_only=True)
    # updated_at = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        return Category.objects.create(**validated_data)

    def update(self, instance, validated_data):
        return super().update(instance, validated_data)

    def validate_title(self, value):
        if Category.objects.filter(title=value):
            raise ValidationError409(
                detail="Cannot insert duplicate title")

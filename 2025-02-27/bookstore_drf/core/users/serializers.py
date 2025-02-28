from rest_framework import serializers
from users.models import Author, Address
from django.contrib.auth.models import User

# use serializers
class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = "__all__"


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    # password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = ["id", "username",  "first_name",
                  "last_name", "email", "is_active"]

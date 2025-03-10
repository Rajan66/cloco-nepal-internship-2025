from django.contrib.auth.models import User, update_last_login
from django.http import Http404
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from users.models import Address, Author
from users.serializers import (
    AddressSerializer,
    AuthorSerializer,
    UserLoginSerializer,
    UserRegistrationSerializer,
    UserSerializer,
)


# selectors.py and services.py
class UserLoginView(APIView):
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        update_last_login(None, user)
        token, created = Token.objects.get_or_create(user=user)
        message = {
            "status": status.HTTP_200_OK,
            "token": str(token.key),
            "user_id": user.pk,
            "email": user.email,
        }

        return Response(message, status=status.HTTP_200_OK)


class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user = serializer.instance

        message = {
            "status": status.HTTP_201_CREATED,
            "user_id": user.id,
            "email": user.email,
        }
        return Response(message, status=status.HTTP_201_CREATED)


class UserList(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        users = User.objects.all()
        if not users.exists():
            return Response([], status=status.HTTP_200_OK)
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserDetail(APIView):
    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except Exception:
            raise Http404

    def get(self, request, pk):
        user = self.get_object(pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        user = self.get_object(pk=pk)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        user = self.get_object(pk=pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class AddressList(APIView):
    def get(self, request, format=None):
        addresses = Address.objects.all()
        if not addresses.exists():
            return Response([], status=status.HTTP_200_OK)

        serializer = AddressSerializer(addresses, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = AddressSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AddressDetail(APIView):
    def get_object(self, pk):
        try:
            return Address.objects.get(pk=pk)
        except:
            raise Http404

    def get(self, request, pk, format=None):
        address = Address.objects.get(pk=pk)
        serializer = AddressSerializer(address)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        address = self.get_object(pk)
        serializer = AddressSerializer(address, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk, format=None):
        address = self.get_object(pk)  # if not found throws 404
        address.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class AuthorList(APIView):
    def get(self, request):
        authors = Author.objects.all()
        if not authors.exists():
            return Response([], status=status.HTTP_200_OK)
        serializer = AuthorSerializer(authors, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = AuthorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AuthorDetail(APIView):
    def get_object(self, pk):
        try:
            return Author.objects.get(pk=pk)
        except Exception:
            raise Http404

    def get(self, request, pk):
        author = self.get_object(pk=pk)
        serializer = AuthorSerializer(author)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        author = self.get_object(pk)
        serializer = AuthorSerializer(author, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        author = self.get_object(pk)  # if not found throws 404
        author.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

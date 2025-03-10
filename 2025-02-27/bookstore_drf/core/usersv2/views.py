from django.contrib.auth.models import update_last_login
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from users.serializers import UserLoginSerializer

from usersv2.helpers import JWTAuthentication as jwt


class UserLoginView(APIView):
    authentication_classes = []

    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        update_last_login(None, user)

        access_token = jwt.generate_access_token(self, user=user)
        refresh_token = jwt.generate_refresh_token(self, user=user)
        message = {
            "status": status.HTTP_200_OK,
            "access_token": access_token,
            "refresh_token": refresh_token,
            "id": user.id,
            "email": user.email,
        }

        response = Response(message, status=status.HTTP_200_OK)
        response.set_cookie(key="access_token", value=access_token, httponly=True)
        response.set_cookie(key="refresh_token", value=refresh_token, httponly=True)

        return response


class UserRegisterView(APIView):
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]

        message = {"status": status.HTTP_200_OK, "user": user}
        return Response(message, status=status.HTTP_200_OK)


class RefreshTokenView(APIView):
    def post(self, request):
        auth = jwt()
        tokens = auth.verify_refresh_token(request=request)
        message = {
            "access_token": tokens[0],
            "refresh_token": tokens[1],
            "status": status.HTTP_201_CREATED,
        }
        return Response(message, status=status.HTTP_201_CREATED)


class UserDetailView(APIView):
    def get(self, request):
        pass

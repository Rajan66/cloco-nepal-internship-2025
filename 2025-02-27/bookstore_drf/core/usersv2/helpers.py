import jwt
from django.conf import settings
from django.contrib.auth.models import User
from django.utils import timezone
from rest_framework import exceptions
from rest_framework.authentication import BaseAuthentication


class JWTAuthentication(BaseAuthentication):
    def generate_access_token(self, user, *args, **kwargs):
        payload = {
            "id": user.id,
            "name": user.username,
            "iat": timezone.now(),
            "exp": timezone.now() + timezone.timedelta(minutes=15),
        }

        access_token = jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")
        return access_token

    def generate_refresh_token(self, user, *args, **kwargs):
        payload = {
            "id": user.id,
            "type": "refresh",
            "name": user.username,
            "iat": timezone.now(),
            "exp": timezone.now() + timezone.timedelta(days=1),
        }

        refresh_token = jwt.encode(
            payload,
            "This should be used to refresh the access token so the user doesn't have to log in",
            algorithm="HS256",
        )
        return refresh_token

    def verify_refresh_token(self, request):
        refresh_token = request.COOKIES.get("refresh_token")

        if not refresh_token:
            return None

        try:
            payload = jwt.decode(
                refresh_token,
                "This should be used to refresh the access token so the user doesn't have to log in",
                algorithms="HS256",
            )
        except jwt.ExpiredSignature:
            raise exceptions.AuthenticationFailed("Invalid refresh token")

        if payload["type"] != "refresh":
            raise exceptions.AuthenticationFailed("User not found")

        user = User.objects.filter(id=payload["id"]).first()
        auth = JWTAuthentication()
        new_access_token = auth.generate_access_token(user)
        new_refresh_token = auth.generate_refresh_token(user)

        return [new_access_token, new_refresh_token]

    def authenticate(self, request):
        if request.headers.get("Authorization"):
            authorization = request.headers.get("Authorization").split(" ")
            token = authorization[1]
        else:
            return None

        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms="HS256")
        except jwt.ExpiredSignature:
            raise exceptions.AuthenticationFailed("Invalid token")

        user = User.objects.filter(id=payload["id"]).first()

        if user is None:
            raise exceptions.AuthenticationFailed("User not found")

        return (user, None)

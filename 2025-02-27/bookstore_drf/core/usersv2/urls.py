from django.urls import path

from usersv2.views import RefreshTokenView, UserLoginView, UserRegisterView

urlpatterns = [
    path("login/", UserLoginView.as_view(), name="login-v2"),
    path("register/", UserRegisterView.as_view(), name="register-v2"),
    path("refresh-token/", RefreshTokenView.as_view(), name="refresh-token"),
]

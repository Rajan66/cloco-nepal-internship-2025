from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from django import forms


from .models import CustomUser, Author


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ("email", "phone")


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = ("email", "phone")


class AuthorCreationForm(forms.ModelForm):
    class Meta:
        model = Author
        fields = ("bio", "birth_date")


class AuthorChangeForm(forms.ModelForm):
    class Meta:
        model = Author
        fields = ("bio", "birth_date")

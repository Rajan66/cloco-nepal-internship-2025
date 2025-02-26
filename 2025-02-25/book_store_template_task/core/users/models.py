from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, AbstractUser
from django.db import models
from django.utils.translation import gettext as _  # marks strings for translation
from django.utils import timezone

from .managers import CustomUserManager
from core.base.models import BaseModel


class CustomUser(AbstractBaseUser, PermissionsMixin, BaseModel):
    email = models.EmailField(_("email address"), unique=True)
    first_name = models.CharField(_("first name"), blank=True)
    last_name = models.CharField(_("first name"), blank=True)
    phone = models.CharField(_("phone number"), blank=True)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)
    created_at = None

    USERNAME_FIELD = "email"  # defines the unique identifer for the User model
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    class Meta:
        # set table's name
        verbose_name = "user"
        verbose_name_plural = "users"

    def __str__(self):
        name = self.first_name + " " + self.last_name
        if (name == " "):
            return self.email
        return name


class Author(BaseModel):
    # default: user.author
    # with related_name: user.author_profile
    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, related_name="profile")
    bio = models.TextField(blank=True)
    birth_date = models.DateField(null=True, blank=True)

    def __str__(self):
        name = self.user.first_name + " " + self.user.last_name
        if (name == " "):
            return self.user.email
        return name

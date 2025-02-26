from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils.translation import gettext as _  # marks strings for translation
from django.utils import timezone

from .managers import CustomUserManager
from core.base.models import BaseModel


class CustomUser(AbstractBaseUser, PermissionsMixin, BaseModel):
    class Meta:
        # set table's name
        verbose_name = "user"
        verbose_name_plural = "users"

    email = models.EmailField(_("email address"), unique=True)
    first_name = models.CharField(_("first name"), blank=True)
    last_name = models.CharField(_("first name"), blank=True)
    phone = models.CharField(_("phone number"), blank=True)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = "email"  # defines the unique identifer for the User model
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email

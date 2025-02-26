from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models

# Create your models here.

from .managers import BaseUserManager

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_("email address"),unique=True) 
    is_staff = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

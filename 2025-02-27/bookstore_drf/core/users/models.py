from core.base.choices import UserStatusChoice
from core.base.models import AbstractModel
from django.contrib.auth.models import User
from django.db import models

# class CustomUser(AbstractBaseUser,PermissionsMixin):
#     email = models.EmailField(_("email address"),unique=True)
#     is_staff = models.BooleanField(default=False)
#     is_active = models.BooleanField(default=True)
#     date_joined = models.DateTimeField(default=timezone.now)
#
#
#     USERNAME_FIELD = "email"
#     REQUIRED_FIELDS = []
#
#     objects = CustomUserManager()
#
#     def __str__(self):
#         # return self.first_name if self.first_name and self.last_name else self.last_name if self.last_name else self.email
#         if self.first_name and self.last_name:
#             return self.first_name + " " + self.last_name
#         elif self.first_name:
#             return self.first_name
#         return self.email


class Address(AbstractModel):
    country = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    street = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.street} | {self.city} | {self.state}"


class Author(AbstractModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField()

    def __str__(self):
        return self.user.username


class Publisher(AbstractModel):
    name = models.CharField(max_length=50, unique=True)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=10, unique=True)
    about = models.TextField()
    address = models.OneToOneField(
        Address, related_name="address", on_delete=models.CASCADE, null=True
    )
    status = models.CharField(choices=UserStatusChoice, default=UserStatusChoice.ACTIVE)

    def __str__(self):
        return self.name

from core.base.choices import UserStatusChoice
from core.base.models import AbstractModel
from django.contrib.auth.models import User
from django.db import models

# short uuid
# core/base/choices.py
# core/base/models.py or core/base/choices/... or core/base/models/...

class Address(AbstractModel):
    country = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    street = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.street} | {self.city} | {self.state}"


# class User(AbstractUser):
#     pass


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
    status = models.CharField(choices=UserStatusChoice,
                              default=UserStatusChoice.active)

    def __str__(self):
        return self.name

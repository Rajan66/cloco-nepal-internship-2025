from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()

# Create your models here.


class Address(models.Model):
    country = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    street = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.street} | {self.city} | {self.state}"


# class User(AbstractUser):
#     pass


class Author(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField()

    def __str__(self):
        return self.username


class Publisher(models.Model):
    # class StatusChoice(models.TextChoices):
    #     active = "active", _("active")
    #     inactive = "inactive", _("inactive")

    name = models.CharField(max_length=50, unique=True)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=10, unique=True)
    about = models.TextField()
    address = models.OneToOneField(
        Address, related_name="address", on_delete=models.CASCADE, null=True
    )
    # status = models.CharField(choices=StatusChoice.choices, default=StatusChoice.active)

    def __str__(self):
        return self.name

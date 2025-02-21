from core.choices.user import UserStatusChoice
from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


# Create your models here.
class AbstractModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now_add=True, null=True)

    # research about meta
    class Meta:
        abstract = True


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
    status = models.CharField(choices=UserStatusChoice, default=UserStatusChoice.active)

    def __str__(self):
        return self.name

from django.db import models
from user.models import Author, Publisher, User


# Create your models here.
class AbstractModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)


class Category(models.Model):
    title = models.CharField(max_length=100, unique=True)
    description = models.TextField()

    def __str__(self):
        return self.title


class Book(models.Model):
    title = models.CharField(max_length=255, unique=True)
    publisher = models.ForeignKey(
        Publisher, related_name="publisher", on_delete=models.CASCADE, null=True
    )
    category = models.ManyToManyField(Category)
    author = models.ForeignKey(
        Author, related_name="author", on_delete=models.CASCADE, default=1
    )
    isbn = models.CharField(max_length=30, unique=True)
    description = models.TextField()
    page_count = models.IntegerField()
    price = models.DecimalField(decimal_places=2, max_digits=10)
    published_date = models.DateField()

    def __str__(self):
        return self.title


class Review(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    rating = models.IntegerField()  # TODO add 1 to 5 validation or something

    def __str__(self):
        return f"{self.id} | {self.book.title}"

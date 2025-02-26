from django.db import models
from core.base.models import BaseModel


class Category(BaseModel):
    title = models.CharField(max_length=50, unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.title


class Book(BaseModel):
    # TODO doesn't let me migrate unless it's null
    # category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
    category = models.ManyToManyField(
        Category,  null=True)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    isbn = models.CharField(max_length=30, unique=True)
    page_count = models.IntegerField()
    price = models.DecimalField(decimal_places=2, max_digits=10)
    # lets you set null value and doesn't require you to add date in forms
    published_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f'{self.title}'

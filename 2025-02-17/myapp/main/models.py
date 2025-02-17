import datetime

from django.db import models
from django.utils import timezone


# Create your models here.
class Question(models.Model):
    question_text = models.CharField(max_length=255)
    published_date = models.DateTimeField(
        "date published"
    )  # to give a human-readable name,optional params

    def __str__(self):
        return self.question_text
        # this returns the text when accessing the objects through django-admin or python-shell

    def was_published_recently(self):
        return self.published_date >= timezone.now() - datetime.timedelta(days=1)


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=255)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text

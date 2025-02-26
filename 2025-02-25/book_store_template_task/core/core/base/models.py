from django.db import models
from shortuuid import uuid


class BaseModel(models.Model):
    # shortuuid are the length of 22 characters
    id = models.CharField(default=uuid, primary_key=True,
                          max_length=22, editable=False)

    class Meta:
        abstract = True

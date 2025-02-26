from django.db import models
from django.utils import timezone
from shortuuid import uuid


class BaseModel(models.Model):
    # shortuuid are the length of 22 characters
    id = models.CharField(default=uuid, primary_key=True,
                          max_length=22, editable=False)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)

    class Meta:
        abstract = True

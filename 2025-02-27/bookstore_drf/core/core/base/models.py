from shortuuid import uuid
from django.db import models


class AbstractModel(models.Model):
    id = models.CharField(default=uuid, primary_key=True,
                          max_length=22, editable=False)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now_add=True, null=True)

    class Meta:
        abstract = True

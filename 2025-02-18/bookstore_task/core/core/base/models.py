from django.db import models


class AbstractModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now_add=True, null=True)

    # research about meta
    class Meta:
        abstract = True

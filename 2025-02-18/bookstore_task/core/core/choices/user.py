from django.db import models


class UserStatusChoice(models.TextChoice):
    active = "active"
    inactive = "inactive"

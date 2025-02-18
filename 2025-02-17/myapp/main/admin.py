from django.contrib import admin

from .models import Choice, Question, User

# Register your models here.
# registered models gets shown in the django-admin UI
admin.site.register(Question)
admin.site.register(Choice)
admin.site.register(User)

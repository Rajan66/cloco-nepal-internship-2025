from django.contrib import admin

from .models import Address, Author, Publisher

# Register your models here.
admin.site.register(Author)
admin.site.register(Publisher)
admin.site.register(Address)

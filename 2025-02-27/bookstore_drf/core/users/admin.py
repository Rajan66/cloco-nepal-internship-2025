from django.contrib import admin
from users.models import Address, Author, Publisher

# Register your models here.
admin.site.register(Address)
admin.site.register(Author)
admin.site.register(Publisher)

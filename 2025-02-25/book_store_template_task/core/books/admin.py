from django.contrib import admin
from .forms import BookCreationForm, BookChangeForm, CategoryCreationForm, CategoryChangeForm
from .models import Book, Category


class BookAdmin(admin.ModelAdmin):
    add_form = BookCreationForm
    form = BookChangeForm
    list_display = ("title", "isbn", "price",)
    list_filter = ("title", "isbn", "price",)
    fieldsets = (
        (None, {"fields": ("title", "isbn", "description",
         "price", "page_count", "published_date")}),
        ("Select Book's Category", {"fields": ("category",)})
    )

    add_fieldsets = (
        (None, {
            "fields": ("title", "isbn", "description", "price", "page_count", "published_date")}),
        ("Select Book's Category", {"fields": ("category",)})
    )
    search_fields = ("title", "isbn")
    ordering = ("price",)


class CategoryAdmin(admin.ModelAdmin):
    add_form = CategoryCreationForm
    form = CategoryChangeForm
    list_display = ("title",)
    list_filter = ("title",)

    # TODO fieldsets is for change form and add_fieldsets is for add form
    # but, add form also uses the `fieldsets` instead of `add_fieldsets`
    # works for the user form somehow
    fieldsets = (
        (None, {"fields": ("title", "description")}),
    )
    add_fieldsets = (
        (None, {"fields": ("title",)})
    )
    search_fields = ("title",)
    ordering = ("title",)


admin.site.register(Book, BookAdmin)
admin.site.register(Category, CategoryAdmin)

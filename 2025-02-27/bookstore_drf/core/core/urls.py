from django.contrib import admin
from django.urls import include, path

apiV1 = "api/v1"
apiV2 = "api/v2"
urlpatterns = [
    path("admin/", admin.site.urls),
    path(f"{apiV1}/books/", include("books.urls")),
    path(f"{apiV1}/users/", include("users.urls")),
    path(f"{apiV1}/orders/", include("orders.urls")),
    path(f"{apiV2}/books/", include("booksv2.urls")),
    path(f"{apiV2}/users/", include("usersv2.urls")),
]

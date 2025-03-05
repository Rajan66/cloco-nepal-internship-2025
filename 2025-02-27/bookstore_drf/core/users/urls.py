from django.urls import path

from users.views import (
    AddressDetail,
    AddressList,
    AuthorDetail,
    AuthorList,
    UserDetail,
    UserList,
    UserLoginView,
    UserRegistrationView,
)

urlpatterns = [
    path("login", UserLoginView.as_view(), name="login"),
    path("register", UserRegistrationView.as_view(), name="register"),
    path("", UserList.as_view(), name="user-list"),
    path("<int:pk>/", UserDetail.as_view(), name="user-detail"),
    path("address/", AddressList.as_view(), name="address-list"),
    path("address/<str:pk>/", AddressDetail.as_view(), name="address-detail"),
    path("authors/", AuthorList.as_view(), name="author-list"),
    path("authors/<str:pk>/", AuthorDetail.as_view(), name="author-detail"),
]

# django appends '/' by default
# because of APPEND_SLASH=true in settings.py

# List ra post ma trailing slash vayo ki page not found
# only works if root url doesnt have trailing slash
# path('/address/', AddressList.as_view(), name="address-list"), this works

# doesnt work, but worked idk
# path('address/', AddressList.as_view(), name="address-list"),

# works in postman doesnt work in browser
# path('address', AddressList.as_view(), name="address-list"),

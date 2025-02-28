from django.urls import path
from users.views import AddressList, AddressDetail, UserList, UserDetail, AuthorList, AuthorDetail

urlpatterns = [
    path('', UserList.as_view(), name="user-list"),
    path('<int:pk>/', UserDetail.as_view(), name="user-detail"),

    # List ra post ma trailing slash vayo ki page not found
    # only works if root url doesnt have trailing
    # path('/address/', AddressList.as_view(), name="address-list"),
    path('address/', AddressList.as_view(), name="address-list"), 
    # doesnt work
    # path('address', AddressList.as_view(), name="address-list"), works in postman
    path('address/<str:pk>/', AddressDetail.as_view(), name="address-detail"),

    path('authors/', AuthorList.as_view(), name="author-list"),
    path('authors/<str:pk>/', AuthorDetail.as_view(), name="author-detail")
]

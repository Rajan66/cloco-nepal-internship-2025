from django.urls import path
from users.views import AddressList, AddressDetail, UserList

urlpatterns = [
    path('', UserList.as_view(), name="user_list"),
    path('address/', AddressList.as_view(), name="address_list"),
    path('address/<str:pk>/', AddressDetail.as_view(), name="address_detail")
]

from django.urls import path

from orders.views import (
    OrderDetail,
    OrderItemDetail,
    OrderItemList,
    OrderList,
    PaymentDetail,
    PaymentList,
    ShipmentDetail,
    ShipmentList,
)

urlpatterns = [
    path("", OrderList.as_view(), name="order-list"),
    path("items/", OrderItemList.as_view(), name="order-item-list"),
    path("items/<str:pk>/", OrderItemDetail.as_view(), name="order-item-detail"),
    path("payments", PaymentList.as_view(), name="payment-list"),
    path("payments/<str:pk>/", PaymentDetail.as_view(), name="payment-detail"),
    path("shipments", ShipmentList.as_view(), name="shipment-list"),
    path("shipments/<str:pk>/", ShipmentDetail.as_view(), name="shipment-detail"),
    path("<str:pk>/", OrderDetail.as_view(), name="order-detail"),
]


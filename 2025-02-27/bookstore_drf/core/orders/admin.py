from django.contrib import admin

from orders.models import Order, OrderItem, Payment, Shipment

admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Shipment)
admin.site.register(Payment)

from django.db import models


class OrderStatusChoice(models.TextChoice):
    pending = "pending"
    unfulfilled = "unfulfilled"
    fulfilled = "fulfilled"
    cancelled = "cancelled"


class PaymentStatusChoice(models.TextChoice):
    paid = "paid"
    pending = "unpaid"


class PaymentMethodChoice(models.TextChoice):
    cash = "cash"
    esewa = "esewa"
    paypal = "paypal"
    card = "card"


class ShipmentStatusChoice(models.TextChoice):
    waiting_for_pickup = "waiting_for_pickup"
    in_transit = "in_transit"
    delivered = "delivered"

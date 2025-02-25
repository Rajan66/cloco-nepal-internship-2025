from django.db import models

class OrderStatusChoice(models.TextChoices):
    pending = "pending"
    unfulfilled = "unfulfilled"
    fulfilled = "fulfilled"
    cancelled = "cancelled"


class PaymentStatusChoice(models.TextChoices):
    paid = "paid"
    pending = "unpaid"


class PaymentMethodChoice(models.TextChoices):
    cash = "cash"
    esewa = "esewa"
    paypal = "paypal"
    card = "card"


class ShipmentStatusChoice(models.TextChoices):
    waiting_for_pickup = "waiting_for_pickup"
    in_transit = "in_transit"
    delivered = "delivered"


class UserStatusChoice(models.TextChoices):
    active = "active"
    inactive = "inactive"

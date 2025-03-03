from django.db import models


class OrderStatusChoice(models.TextChoices):
    PENDING = "PENDING"
    UNFULFILLED = "UNFULFILLED"
    FULFILLED = "FULFILLED"
    CANCELLED = "CANCELLED"


class PaymentStatusChoice(models.TextChoices):
    PAID = "PAID"
    PENDING = "UNPAID"


class PaymentMethodChoice(models.TextChoices):
    CASH = "CASH"
    ESEWA = "ESEWA"
    PAYPAL = "PAYPAL"
    CARD = "CARD"


class ShipmentStatusChoice(models.TextChoices):
    WAITING_FOR_PICKUP = "WAITING_FOR_PICKUP"
    IN_TRANSIT = "IN_TRANSIT"
    DELIVERED = "DELIVERED"


class UserStatusChoice(models.TextChoices):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


class ReviewRatingChoice(models.IntegerChoices):
    ONE = 1
    TWO = 2
    THREE = 3
    FOUR = 4
    FIVE = 5

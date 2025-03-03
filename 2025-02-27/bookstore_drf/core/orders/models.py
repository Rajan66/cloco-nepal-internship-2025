from books.models import Book
from core.base.choices import (
    OrderStatusChoice,
    PaymentMethodChoice,
    PaymentStatusChoice,
    ShipmentStatusChoice,
)
from core.base.models import AbstractModel
from django.contrib.auth.models import User
from django.db import models
from users.models import Address


class Order(AbstractModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    billing_address = models.ForeignKey(
        Address, related_name="billing_address", on_delete=models.CASCADE, null=True
    )
    shipping_address = models.ForeignKey(
        Address, related_name="shipping_address", on_delete=models.CASCADE, null=True
    )
    quantity = models.IntegerField()
    total_price = models.DecimalField(decimal_places=2, max_digits=10)
    status = models.CharField(
        choices=OrderStatusChoice, default=OrderStatusChoice.UNFULFILLED
    )

    def __str__(self):
        return f"{self.id} | {self.user.username} | ${self.total_price}"


class OrderItem(AbstractModel):
    # pk = models.CompositePrimaryKey("order_id", "book_id")
    order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True)
    book = models.ForeignKey(Book, on_delete=models.CASCADE, null=True)
    quantity = models.IntegerField()

    def __str__(self):
        return f"{self.id} | {self.book.title} | {self.order.id}"


class Payment(AbstractModel):
    order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    amount = models.DecimalField(decimal_places=2, max_digits=10)
    delivery_charge = models.DecimalField(decimal_places=2, max_digits=10, null=True)
    payment_method = models.CharField(max_length=10)
    status = models.CharField(
        choices=PaymentStatusChoice, default=PaymentStatusChoice.PENDING
    )
    payment_method = models.CharField(
        choices=PaymentMethodChoice, default=PaymentMethodChoice.CASH
    )

    def __str__(self):
        return f"{self.id} | {self.user.username} | {self.order.id} | ${self.amount}"


class Shipment(AbstractModel):
    order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    shipment_date = models.DateTimeField()
    estimated_date = models.DateTimeField()
    delivery_date = models.DateTimeField(null=True)
    status = models.CharField(
        choices=ShipmentStatusChoice, default=ShipmentStatusChoice.WAITING_FOR_PICKUP
    )

    def __str__(self):
        return (
            f"ShipmentId: {self.id} | OrderId: {self.order.id} | {self.user.username}"
        )

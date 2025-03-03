from books.models import Book
from django.contrib.auth.models import User
from rest_framework import serializers
from users.models import Address

from orders.models import Order, OrderItem, Payment, Shipment


class OrderSerializer(serializers.Serializer):
    id = serializers.CharField(max_length=22, read_only=True)
    user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), read_only=False, many=False
    )
    billing_address = serializers.PrimaryKeyRelatedField(
        queryset=Address.objects.all(), read_only=False, many=False
    )
    shipping_address = serializers.PrimaryKeyRelatedField(
        queryset=Address.objects.all(), read_only=False, many=False
    )
    quantity = serializers.IntegerField()
    total_price = serializers.DecimalField(decimal_places=2, max_digits=10)
    status = serializers.CharField()

    def create(self, validated_data):
        return Order.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.user = validated_data.get("user", instance.user)
        instance.billing_address = validated_data.get(
            "billing_address", instance.billing_address
        )
        instance.shipping_address = validated_data.get(
            "shipping_address", instance.shipping_address
        )
        instance.quantity = validated_data.get("quantity", instance.quantity)
        instance.total_price = validated_data.get("total_price", instance.total_price)
        instance.status = validated_data.get("status", instance.status)

        instance.save()
        return instance


class OrderItemSerializer(serializers.Serializer):
    id = serializers.CharField(max_length=22, read_only=True)
    order = serializers.PrimaryKeyRelatedField(
        queryset=Order.objects.all(), read_only=False, many=False
    )
    book = serializers.PrimaryKeyRelatedField(
        queryset=Book.objects.all(), read_only=False, many=False
    )
    quantity = serializers.IntegerField()

    def create(self, validated_data):
        return OrderItem.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.order = validated_data.get("order", instance.order)
        instance.book = validated_data.get("book", instance.book)
        instance.quantity = validated_data.get("quantity", instance.quantity)

        instance.save()
        return instance


class PaymentSerializer(serializers.Serializer):
    id = serializers.CharField(max_length=22, read_only=True)
    order = serializers.PrimaryKeyRelatedField(
        queryset=Order.objects.all(), read_only=False, many=False
    )
    user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), read_only=False, many=False
    )
    amount = serializers.DecimalField(decimal_places=2, max_digits=10)
    delivery_charge = serializers.DecimalField(decimal_places=2, max_digits=10)
    status = serializers.CharField()
    payment_method = serializers.CharField()

    def create(self, validated_data):
        return Payment.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.order = validated_data.get("order", instance.order)
        instance.user = validated_data.get("user", instance.user)
        instance.amount = validated_data.get("amount", instance.amount)
        instance.delivery_charge = validated_data.get(
            "delivery_charge", instance.delivery_charge
        )
        instance.status = validated_data.get("status", instance.status)
        instance.payment_method = validated_data.get(
            "payment_method", instance.payment_method
        )

        instance.save()
        return instance


class ShipmentSerializer(serializers.Serializer):
    id = serializers.CharField(max_length=22, read_only=True)
    order = serializers.PrimaryKeyRelatedField(
        queryset=Order.objects.all(), read_only=False, many=False
    )
    user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), read_only=False, many=False
    )
    shipment_date = serializers.DateTimeField()
    estimated_date = serializers.DateTimeField()
    delivery_date = serializers.DateTimeField()
    status = serializers.CharField()

    def create(self, validated_data):
        return Shipment.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.order = validated_data.get("order", instance.order)
        instance.user = validated_data.get("user", instance.user)
        instance.shipment_date = validated_data.get(
            "shipment_date", instance.shipment_date
        )
        instance.estimated_date = validated_data.get(
            "estimated_date", instance.estimated_date
        )
        instance.delivery_date = validated_data.get(
            "delivery_date", instance.delivery_date
        )
        instance.status = validated_data.get("status", instance.status)

        instance.save()
        return instance

from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from orders.models import Order, OrderItem, Payment, Shipment
from orders.serializers import (
    OrderItemSerializer,
    OrderSerializer,
    PaymentSerializer,
    ShipmentSerializer,
)


class OrderList(APIView):
    def get(self, request):
        orders = Order.objects.all()
        if not orders.exists():
            return Response([], status=status.HTTP_200_OK)
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderDetail(APIView):
    def get_object(self, pk):
        try:
            return Order.objects.get(pk=pk)
        except Exception:
            raise Http404

    def get(self, request, pk):
        order = self.get_object(pk=pk)
        serializer = OrderSerializer(order)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        order = self.get_object(pk=pk)
        serializer = OrderSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        order = self.get_object(pk=pk)
        order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class OrderItemList(APIView):
    def get(self, request):
        order_items = OrderItem.objects.all()
        if not order_items.exists():
            return Response([], status=status.HTTP_200_OK)
        serializer = OrderItemSerializer(order_items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = OrderItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderItemDetail(APIView):
    def get_object(self, pk):
        try:
            return OrderItem.objects.get(pk=pk)
        except Exception:
            raise Http404

    def get(self, request, pk):
        order_item = self.get_object(pk=pk)
        serializer = OrderItemSerializer(order_item)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        order_item = self.get_object(pk=pk)
        serializer = OrderItemSerializer(order_item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        order_item = self.get_object(pk=pk)
        order_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PaymentList(APIView):
    def get(self, request):
        payments = Payment.objects.all()
        if not payments.exists():
            return Response([], status=status.HTTP_200_OK)
        serializer = PaymentSerializer(payments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = PaymentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PaymentDetail(APIView):
    def get_object(self, pk):
        try:
            return Payment.objects.get(pk=pk)
        except Exception:
            raise Http404

    def get(self, request, pk):
        payment = self.get_object(pk=pk)
        serializer = PaymentSerializer(payment)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        payment = self.get_object(pk=pk)
        serializer = PaymentSerializer(payment, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        payment = self.get_object(pk=pk)
        payment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ShipmentList(APIView):
    def get(self, request):
        shipments = Shipment.objects.all()
        if not shipments.exists():
            return Response([], status=status.HTTP_200_OK)
        serializer = ShipmentSerializer(shipments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ShipmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ShipmentDetail(APIView):
    def get_object(self, pk):
        try:
            return Shipment.objects.get(pk=pk)
        except Exception:
            raise Http404

    def get(self, request, pk):
        shipment = self.get_object(pk=pk)
        serializer = ShipmentSerializer(shipment)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        shipment = self.get_object(pk=pk)
        serializer = ShipmentSerializer(shipment, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        shipment = self.get_object(pk=pk)
        shipment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Generated by Django 5.1.6 on 2025-02-27 11:26

import django.db.models.deletion
import shortuuid.main
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('books', '0001_initial'),
        ('users', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.CharField(default=shortuuid.main.ShortUUID.uuid, editable=False, max_length=22, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('quantity', models.IntegerField()),
                ('total_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('status', models.CharField(choices=[('PENDING', 'Pending'), ('UNFULFILLED', 'Unfulfilled'), ('FULFILLED', 'Fulfilled'), ('CANCELLED', 'Cancelled')], default='UNFULFILLED')),
                ('billing_address', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='billing_address', to='users.address')),
                ('shipping_address', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='shipping_address', to='users.address')),
                ('user', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.CharField(default=shortuuid.main.ShortUUID.uuid, editable=False, max_length=22, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('quantity', models.IntegerField()),
                ('book', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='books.book')),
                ('order', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='orders.order')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.CharField(default=shortuuid.main.ShortUUID.uuid, editable=False, max_length=22, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('delivery_charge', models.DecimalField(decimal_places=2, max_digits=10, null=True)),
                ('status', models.CharField(choices=[('PAID', 'Paid'), ('UNPAID', 'Pending')], default='UNPAID')),
                ('payment_method', models.CharField(choices=[('CASH', 'Cash'), ('ESEWA', 'Esewa'), ('PAYPAL', 'Paypal'), ('CARD', 'Card')], default='CASH')),
                ('order', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='orders.order')),
                ('user', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Shipment',
            fields=[
                ('id', models.CharField(default=shortuuid.main.ShortUUID.uuid, editable=False, max_length=22, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('shipment_date', models.DateTimeField()),
                ('estimated_date', models.DateTimeField()),
                ('delivery_date', models.DateTimeField(null=True)),
                ('status', models.CharField(choices=[('WAITING_FOR_PICKUP', 'Waiting For Pickup'), ('IN_TRANSIT', 'In Transit'), ('DELIVERED', 'Delivered')], default='WAITING_FOR_PICKUP')),
                ('order', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='orders.order')),
                ('user', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]

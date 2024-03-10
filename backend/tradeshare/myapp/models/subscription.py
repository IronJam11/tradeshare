from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator


class Subscription(models.Model):
    client = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="subscriptions"
    )
    trader = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="subscribers", null=True, blank=True
    )
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    price = models.DecimalField(
        max_digits=10, decimal_places=2, validators=[MinValueValidator(0)]
    )

    def __str__(self):
        return f"{self.client} subscribed to {self.trader}"

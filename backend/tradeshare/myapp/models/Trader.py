from django.db import models
from django.conf import settings
from .user import User

class Trader(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True)
    experience = models.PositiveIntegerField()
    trading_strategy = models.TextField()
    average_return = models.FloatField()
    premium_price = models.DecimalField(max_digits=10, decimal_places=2)
    subscribers = models.PositiveIntegerField()
    highest_profit = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.user.email

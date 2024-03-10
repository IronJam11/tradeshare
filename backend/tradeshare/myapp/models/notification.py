from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator

from myapp.models import Client, Trader, Trade

class Notification(models.Model):
    client = models.ForeignKey(
        Client, 
        on_delete=models.CASCADE,
    )

    trader = models.ForeignKey(
        Trader, 
        on_delete=models.CASCADE,
    )

    trade = models.ForeignKey(
        Trade,
        on_delete=models.CASCADE
    )
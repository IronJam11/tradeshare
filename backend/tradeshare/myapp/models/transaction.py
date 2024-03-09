from django.db import models
from .trade import Trade


class Transaction(models.Model):
    trade = models.ForeignKey(Trade, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return (
            f"{self.trade.user.username} - {self.trade.stock.symbol} - {self.timestamp}"
        )

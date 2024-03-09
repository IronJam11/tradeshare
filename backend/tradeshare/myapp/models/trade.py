from .stock import Stock
from django.db import models
from .user import BaseUser

class Trade(models.Model):
    stock = models.ForeignKey(Stock, on_delete=models.CASCADE)
    user = models.ForeignKey(BaseUser, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(auto_now_add=True)
    is_buy = models.BooleanField()  # True if buy, False if sell

    def __str__(self):
        return f"{self.user.username} - {self.stock.symbol} - {self.timestamp}"

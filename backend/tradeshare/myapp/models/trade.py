from django.db import models
from myapp.models import Portfolio
from .user import BaseUser

class Trade(models.Model):
    user = models.ForeignKey(BaseUser, on_delete=models.CASCADE)
    stock_symbol = models.CharField(max_length=10)
    stock_name = models.CharField(max_length=100)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=100, decimal_places=20)
    timestamp = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20)
    is_buy = models.BooleanField(blank=False, null=False, default=True)
    portfolio = models.ForeignKey(Portfolio, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.username} - {self.stock_symbol} - {self.timestamp}"

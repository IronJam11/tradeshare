from django.db import models
from .user import BaseUser

class Trade(models.Model):
    user = models.ForeignKey(BaseUser, on_delete=models.CASCADE)
    stock_symbol = models.CharField(max_length=10)  # Symbol of the traded stock
    stock_name = models.CharField(max_length=100)   # Name of the traded stock
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(auto_now_add=True)
    is_buy = models.BooleanField() 
    status = models.CharField(max_length=20)
    fee = models.DecimalField(max_digits=10, decimal_places=2) 

    def __str__(self):
        return f"{self.user.username} - {self.stock_symbol} - {self.timestamp}"

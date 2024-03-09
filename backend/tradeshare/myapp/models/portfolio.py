from django.db import models
from .user import BaseUser

class Portfolio(models.Model):
    user = models.OneToOneField(BaseUser, on_delete=models.CASCADE)
    cumulative_profit = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    highest_winning_trade = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    highest_losing_trade = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    longest_trade_duration = models.DurationField(null=True, blank=True)
    shortest_trade_duration = models.DurationField(null=True, blank=True)

    def __str__(self):
        return f"Portfolio of {self.user.username}"

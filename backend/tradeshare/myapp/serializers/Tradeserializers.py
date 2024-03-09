from rest_framework import serializers
from myapp.models import Trader
from .Userserializers import CustomUserSerializer

class TraderSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()

    class Meta:
        model = Trader
        fields = ['user', 'experience', 'trading_strategy', 'average_return', 'premium_price', 'subscribers', 'highest_profit']

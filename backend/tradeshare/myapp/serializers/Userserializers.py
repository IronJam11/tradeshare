from rest_framework import serializers
from myapp.models import User

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'pan_card', 'trading_history']

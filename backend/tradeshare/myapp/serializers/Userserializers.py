from rest_framework import serializers
from myapp.models import Client, Trader


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = [
            "id",
            "username",
            "email",
            "password",
            "pan_card",
            "trading_history",
            "age",
        ]
        extra_kwargs = {
            "password": {"write_only": True},
            "email": {"required": True},
            "pan_card": {"required": True},
        }

    def create(self, validated_data):
        client = Client.objects.create_user(**validated_data)
        return client


class TraderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trader
        fields = [
            "id",
            "username",
            "email",
            "password",
            "pan_card",
            "trading_history",
            "experience",
            "trading_strategy",
            "average_return",
            "highest_profit",
        ]
        extra_kwargs = {
            "password": {"write_only": True},
            "email": {"required": True},
        }

    def create(self, validated_data):
        trader = Trader.objects.create_user(**validated_data)
        return trader

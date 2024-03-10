from rest_framework import serializers
from myapp.models import Offering

class OfferingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offering
        fields = ['id', 'duration', 'price']

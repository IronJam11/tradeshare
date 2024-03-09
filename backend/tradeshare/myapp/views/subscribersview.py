from rest_framework import generics
from myapp.models import Subscription
from myapp.serializers import SubscriptionSerializer

class SubscriptionListCreate(generics.ListCreateAPIView):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer

class SubscriptionRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer

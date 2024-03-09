from rest_framework import generics
from myapp.models import Client, Trader
from myapp.serializers import ClientSerializer, TraderSerializer


class ClientListCreate(generics.ListCreateAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer


class ClientRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer


class TraderListCreate(generics.ListCreateAPIView):
    queryset = Trader.objects.all()
    serializer_class = TraderSerializer


class TraderRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Trader.objects.all()
    serializer_class = TraderSerializer

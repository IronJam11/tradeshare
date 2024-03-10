

from rest_framework import generics
from myapp.models import  Trade, Portfolio, Transaction
from myapp.serializers import (
    TradeSerializer,
    PortfolioSerializer,
    TransactionSerializer,
)



class TradeListView(generics.ListAPIView):
    queryset = Trade.objects.all()
    serializer_class = TradeSerializer


class PortfolioListView(generics.ListAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer


class TransactionListView(generics.ListAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

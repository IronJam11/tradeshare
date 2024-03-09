

from rest_framework import generics
from myapp.models import Stock, Trade, Portfolio, Transaction
from myapp.serializers import (
    StockSerializer,
    TradeSerializer,
    PortfolioSerializer,
    TransactionSerializer,
)


class StockListView(generics.ListAPIView):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer


class TradeListView(generics.ListAPIView):
    queryset = Trade.objects.all()
    serializer_class = TradeSerializer


class PortfolioListView(generics.ListAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer


class TransactionListView(generics.ListAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

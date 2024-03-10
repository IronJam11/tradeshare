from rest_framework import generics
from myapp.models import Trade, Portfolio, Transaction
from myapp.serializers import (
    TradeSerializer,
    PortfolioSerializer,
    TransactionSerializer,
)

from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status


from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from myapp.models import Trade
from myapp.serializers import TradeSerializer


class TradeListView(generics.ListCreateAPIView):
    queryset = Trade.objects.all()
    serializer_class = TradeSerializer

    def post(self, request, *args, **kwargs):
        print(request)
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class TradeDetailView(generics.RetrieveUpdateAPIView):
    queryset = Trade.objects.all()
    serializer_class = TradeSerializer


class PortfolioListView(generics.ListAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer


class TransactionListView(generics.ListAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

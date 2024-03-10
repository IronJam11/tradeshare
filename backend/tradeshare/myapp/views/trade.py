from django.db.models import Q
from django.utils import timezone

from datetime import timezone

from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response

from myapp.models import Trader, Trade
from myapp.utils import notify_subscribers
from myapp.serializers import TradeSerializer


class TradeViewSet(viewsets.ModelViewSet):
    """
    Houses all API endpoints related to trade creation, retrieval
    """

    queryset = Trade.objects.all()
    serializer_class = TradeSerializer

    @action(detail=False, methods=['post'])
    def create_trade(self, request):
        user = request.user
        stock_symbol = request.data.get('stock_symbol', None)
        stock_name = request.data.get('stock_name', None)
        quantity = request.data.get('quantity', None)
        price = request.data.get('price', None)
        timestamp = timezone.now()
        status = request.dataa.get('status', None)

        trade = Trade.objects.create(
            user=user,
            stock_symbol=stock_symbol,
            stock_name=stock_name,
            quantity=quantity,
            price=price,
            timestamp=timestamp,
            status=status
        )
        

        if isinstance(user, Trader):
            notify_subscribers(user, trade)


    @action(detail=False, methods=['post'])
    def copy_trade(self, requset):
        user = self.
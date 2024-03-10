from django.db.models import Q
from django.utils import timezone

from datetime import timedelta

from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response

from myapp.models import Subscription, Client, Trader
from myapp.utils import get_active_subscription
from myapp.serializers import SubscriptionSerializer


class SubscriptionViewSet(viewsets.ModelViewSet):
    """
    Houses all API endpoints related to subscription creation, retrieval
    """

    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer

    @action(detail=False, methods=['post'])
    def subscribe(self, request):
        client = request.user
        trader_id = request.data.get('trader_id', None)
        try:
            trader = Trader.objects.get(id=trader_id)
        except Trader.DoesNotExist:
            return Response("Invalid trader", status=status.HTTP_400_BAD_REQUEST)
        
        if get_active_subscription(client, trader):
            return Response("Subscription already active", status=status.HTTP_409_CONFLICT)
        
        duration = request.data.get('duration', None)
        price = request.data.get('price', None)

        if not duration or not price:
            return Response("Bro where duration/price?", status=status.HTTP_400_BAD_REQUEST)
        
        start_date = timezone.now().date()
        end_date = start_date + timedelta(days=duration)

        subscription = Subscription.objects.create(
            client=client,
            trader=trader,
            start_date=start_date,
            end_date=end_date,
            price=price
        )
        
        return Response(
            data=SubscriptionSerializer(subscription).data,
            status=status.HTTP_200_OK
        )

    @action(detail=False, methods=['get'])
    def get_subscriptions(self, request):
        return Response(
            data=SubscriptionSerializer(
                Subscription.objects.filter(client=request.user),
                many=True
            ).data,
            status=status.HTTP_200_OK
        )
    
    
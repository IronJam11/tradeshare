from myapp.models import Subscription, Client
from django.utils import timezone

def get_active_subscription(client, trader):
    
    current_date = timezone.now().date()

    try:
        return Subscription.objects.get(
            client=client,
            trader=trader,
            start_date__lte=current_date,
            end_date_gte=current_date
        )
    except:
        return None

def get_active_subscribers_of_traders(trader):
    current_date = timezone.now().date()
    try:
        subscriptions = Subscription.objects.filter(
            trader=trader,
            start_date__lte=current_date,
            end_date_gte=current_date
        )
    except:
        return None

    client_ids = [s.client.id for s in subscriptions]
    return Client.objects.filter(client__id__in=client_ids)

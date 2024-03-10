from myapp.models import Trader, Subscription, Trade, Notification
from myapp.utils import get_active_subscribers_of_traders

def notify_subscribers(trader, trade):
    """
    When a trader makes a trade, all users that are 
    currently subscribed to this trader must be notified of it
    """

    subscribers = get_active_subscribers_of_traders(trader)
    for s in subscribers:
        try:
            notification = Notification.objects.create(
                client=s,
                trade=trade,
                trader=trader
            )
        except:
            pass

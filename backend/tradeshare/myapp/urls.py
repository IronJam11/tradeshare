from django.urls import path
from myapp.views import (
    ClientLoginAPIView,
    ClientRegisterAPIView,
    TraderLoginAPIView,
    TraderRegisterAPIView,
    TradeListView,
    PortfolioListView,
    TransactionListView,
    ClientListCreate,
    ClientRetrieveUpdateDestroy,
    TraderListCreate,
    TraderRetrieveUpdateDestroy,
    SubscriptionListCreate,
    SubscriptionRetrieveUpdateDestroy,
    OfferingListCreateAPIView,
    OfferingRetrieveUpdateDestroyAPIView,
    
)

from myapp.views.payment import create_payment_intent
urlpatterns = [
    path("client/login/", ClientLoginAPIView.as_view(), name="client_login"),
    path("client/register/", ClientRegisterAPIView.as_view(), name="client_register"),
    path("trader/login/", TraderLoginAPIView.as_view(), name="trader_login"),
    path("trader/register/", TraderRegisterAPIView.as_view(), name="trader_register"),
    path("trades/", TradeListView.as_view(), name="trade_list"),
    path(
        "offerings/", OfferingListCreateAPIView.as_view(), name="offering-list-create"
    ),
    path(
        "offerings/<int:pk>/",
        OfferingRetrieveUpdateDestroyAPIView.as_view(),
        name="offering-detail",
    ),
    path("portfolio/", PortfolioListView.as_view(), name="portfolio_list"),
    path("transactions/", TransactionListView.as_view(), name="transaction_list"),
    path("clients/", ClientListCreate.as_view(), name="client-list"),
    path(
        "clients/<int:pk>/", ClientRetrieveUpdateDestroy.as_view(), name="client-detail"
    ),
    path("traders/", TraderListCreate.as_view(), name="trader-list"),
    path(
        "traders/<int:pk>/", TraderRetrieveUpdateDestroy.as_view(), name="trader-detail"
    ),
    path(
        "subscriptions/",
        SubscriptionListCreate.as_view(),
        name="subscription-list-create",
    ),
    path(
        "subscriptions/<int:pk>/",
        SubscriptionRetrieveUpdateDestroy.as_view(),
        name="subscription-retrieve-update-destroy",
    ),
    path('api/create-payment-intent', create_payment_intent, name='create-payment-intent'),
]

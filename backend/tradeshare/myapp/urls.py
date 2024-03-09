from django.urls import path
from myapp.views import (
    ClientLoginAPIView,
    ClientRegisterAPIView,
    TraderLoginAPIView,
    TraderRegisterAPIView,
    StockListView,
    TradeListView,
    PortfolioListView,
    TransactionListView,
    ClientListCreate,
    ClientRetrieveUpdateDestroy,
    TraderListCreate,
    TraderRetrieveUpdateDestroy,
)

urlpatterns = [
    path("client/login/", ClientLoginAPIView.as_view(), name="client_login"),
    path("client/register/", ClientRegisterAPIView.as_view(), name="client_register"),
    path("trader/login/", TraderLoginAPIView.as_view(), name="trader_login"),
    path("trader/register/", TraderRegisterAPIView.as_view(), name="trader_register"),
    path("stocks/", StockListView.as_view(), name="stock_list"),
    path("trades/", TradeListView.as_view(), name="trade_list"),
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
]

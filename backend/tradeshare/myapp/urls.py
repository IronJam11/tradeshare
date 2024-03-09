from django.urls import path
from myapp.views import (
    ClientLoginAPIView,
    ClientRegisterAPIView,
    TraderLoginAPIView,
    TraderRegisterAPIView,
)

urlpatterns = [
    path("client/login/", ClientLoginAPIView.as_view(), name="client_login"),
    path("client/register/", ClientRegisterAPIView.as_view(), name="client_register"),
    path("trader/login/", TraderLoginAPIView.as_view(), name="trader_login"),
    path("trader/register/", TraderRegisterAPIView.as_view(), name="trader_register"),
]

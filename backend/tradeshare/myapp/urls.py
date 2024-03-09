from django.urls import path
from myapp.views import (
    CustomUserListCreate,
    CustomUserRetrieveUpdateDestroy,
    LoginAPIView,
    RegisterAPIView
)

urlpatterns = [
    path("users/", CustomUserListCreate.as_view(), name="user-list-create"),
    path(
        "users/<int:pk>/",
        CustomUserRetrieveUpdateDestroy.as_view(),
        name="user-retrieve-update-destroy",
    ),
    path("login/", LoginAPIView.as_view(), name="login"),
    path('register/', RegisterAPIView.as_view(), name='register'),
]

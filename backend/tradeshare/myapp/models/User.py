from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from django.db import models
from .offerings import Offering


class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, username, password, **extra_fields)


class BaseUser(AbstractBaseUser, PermissionsMixin):
    pan_card = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True)
    trading_history = models.TextField(null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    is_staff = models.BooleanField(
        default=True
    )

    is_superuser = models.BooleanField(
        default=True
    )

    objects = CustomUserManager()

    def __str__(self):
        return self.email


class Client(BaseUser):
    age = models.PositiveIntegerField()
    is_client = models.BooleanField(default=True)


    class Meta:
        verbose_name_plural = "Clients"

class Trader(BaseUser):
    
    age = models.PositiveIntegerField(null=True)
    experience = models.PositiveIntegerField(null=True)
    trading_strategy = models.TextField(null=True)
    average_return = models.FloatField(null=True)
    offering = models.ForeignKey(
        "Offering", related_name="traders", on_delete=models.SET_NULL, null=True
    )
    highest_profit = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    is_trader = models.BooleanField(default=True)


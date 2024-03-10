from django.contrib import admin
from django.contrib.auth.models import Group
from .models import Client, Trader, Subscription, Trade



# Register your models
admin.site.register(Client)
admin.site.register(Trader)
admin.site.register(Subscription)
admin.site.register(Trade)
admin.site.unregister(Group)
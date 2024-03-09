from django.contrib import admin
from django.contrib.auth.models import Group
from .models import Client, Trader






# Register your models
admin.site.register(Client)
admin.site.register(Trader)
admin.site.unregister(Group)
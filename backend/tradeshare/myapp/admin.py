from django.contrib import admin
from django.contrib.auth.models import Group
from myapp.models import Trader, User


admin.site.register(User)
admin.site.register(Trader)

admin.site.unregister(Group)

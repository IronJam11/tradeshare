from django.contrib import admin
from django.contrib.auth.models import Group
from myapp.models import Trader, User

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'pan_card') 
    search_fields = ('name', 'email', 'pan_card') 
    readonly_fields = ('trading_history',) 

admin.site.register(User, CustomUserAdmin)

admin.site.register(Trader)

admin.site.unregister(Group)

from django.contrib import admin

from src.apps.service.models import Service

# Register your models here.


class ServiceAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "price",
        "description",
    )


admin.site.register(Service, ServiceAdmin)

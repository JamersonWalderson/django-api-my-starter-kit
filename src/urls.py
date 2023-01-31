from django.contrib import admin
from django.urls import path, include
from src.apps.service.api.v1.views import ServiceViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r"services", ServiceViewSet, basename="Servicos")
urlpatterns = [
    path("admin/", admin.site.urls),
    path("v1/", include(router.urls)),
]

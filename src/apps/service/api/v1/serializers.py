from dataclasses import fields
from rest_framework import routers, serializers, viewsets

from src.apps.service.models import Service


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = "__all__"

from src.apps.service.api.v1.serializers import Service, ServiceSerializer
from src.apps.service.models import Service
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.
class ServiceViewSet(viewsets.ModelViewSet):
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()

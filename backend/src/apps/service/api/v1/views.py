from src.apps.service.api.v1.serializers import Service, ServiceSerializer
from src.apps.service.models import Service
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class ServiceViewSet(viewsets.ModelViewSet):
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()
    # permission_classes = (IsAuthenticated,)

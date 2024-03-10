from rest_framework import generics
from myapp.models import Offering
from myapp.serializers import OfferingSerializer

class OfferingListCreateAPIView(generics.ListCreateAPIView):
    queryset = Offering.objects.all()
    serializer_class = OfferingSerializer

class OfferingRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Offering.objects.all()
    serializer_class = OfferingSerializer

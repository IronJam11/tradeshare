from rest_framework import generics, mixins
from myapp.models import Client, Trader
from myapp.serializers import ClientSerializer, TraderSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status


class ClientListCreate(generics.ListCreateAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer


class ClientRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer


class TraderListCreate(generics.ListCreateAPIView):
    queryset = Trader.objects.all()
    serializer_class = TraderSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class TraderRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Trader.objects.all()
    serializer_class = TraderSerializer

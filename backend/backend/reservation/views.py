from django.core.cache import cache
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Train
from .serializers import TrainSerializer

class TrainListCreateAPIView(APIView):
    def get(self, request):
        cache_key = "train_list"  # Klucz dla danych w Redis
        cached_data = cache.get(cache_key)

        if cached_data:
            return Response(cached_data)  # Zwracamy dane z cache

        # Pobieramy dane z bazy, jeśli nie ma ich w cache
        trains = Train.objects.all()
        serializer = TrainSerializer(trains, many=True)
        data = serializer.data

        cache.set(cache_key, data, timeout=50)  # Cache na 5 minut
        return Response(data)

    def post(self, request):
        serializer = TrainSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            cache.delete("train_list")  # Usuwamy cache, bo dane się zmieniły
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class HelloWorldView(APIView):
    def get(self, request):
        return Response({"message": "helloworld"})
    


class TrainRetrieveUpdateDestroyAPIView(APIView):
    def get_object(self, pk):
        try:
            return Train.objects.get(pk=pk)
        except Train.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        train = self.get_object(pk)
        serializer = TrainSerializer(train)
        return Response(serializer.data)

    def put(self, request, pk):
        train = self.get_object(pk)
        serializer = TrainSerializer(train, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        train = self.get_object(pk)
        train.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


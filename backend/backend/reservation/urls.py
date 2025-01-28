from django.urls import path
from .views import HelloWorldView, TrainListCreateAPIView, TrainRetrieveUpdateDestroyAPIView


urlpatterns = [
    path('tickets/', HelloWorldView.as_view(), name='helloworld'),
    path('trains/', TrainListCreateAPIView.as_view(), name='train-list-create'),
    path('trains/<int:pk>/', TrainRetrieveUpdateDestroyAPIView.as_view(), name='train-detail-update-delete'),
]

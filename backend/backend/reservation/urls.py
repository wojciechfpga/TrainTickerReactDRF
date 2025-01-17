from django.urls import path
from .views import HelloWorldView

urlpatterns = [
    path('tickets/', HelloWorldView.as_view(), name='helloworld'),
]

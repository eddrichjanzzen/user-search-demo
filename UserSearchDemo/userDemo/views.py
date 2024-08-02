from django.contrib.auth import get_user_model
from rest_framework import viewsets, filters

User = get_user_model()

from userDemo.serializers import UserSerializer

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['first_name', 'last_name']  # fields you want to search
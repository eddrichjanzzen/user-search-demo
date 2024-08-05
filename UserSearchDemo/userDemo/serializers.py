from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()

# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'url', 'username', 'email', 'first_name', 'last_name']

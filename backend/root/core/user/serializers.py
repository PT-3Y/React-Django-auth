from pyexpat import model
from core.user.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'firstname', 'lastname', 'email','password', 'is_allowed']
        read_only_field = ['']
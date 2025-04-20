# This returns the db results data in form of Json making this crucial for API
 
from rest_framework import serializers
from .models import Users

class UserSerializer(serializers.ModelSerializer):
    class Meta():
        model = Users
        fields = '__all__'

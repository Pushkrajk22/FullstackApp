# This returns the db results data in form of Json making this crucial for API
 
from rest_framework import serializers
from .models import Users

class UserSerializer(serializers.ModelSerializer):
    class Meta():
        model = Users
        fields = '__all__'   #['id', 'name', 'password']
        extra_kwargs = {'password': {'write_only': True}}   #this marks the password field as read only so get requests cannot read
    
    def create(self, validated_data):
        user = Users(name=validated_data['name'])
        user.set_password(validated_data['password'])
        user.save()
        return user

        

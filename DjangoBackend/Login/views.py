from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Users
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

@api_view(['GET'])
def listUsers(request):
    users = Users.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addUser(request):
    serializer = UserSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deleteUser(request, pk):
    try:
        user = Users.objects.get(pk=pk)
    except Users.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

    user.delete()
    return Response({'message': 'User deleted successfully'}, status=status.HTTP_200_OK)

@api_view(['POST'])
def loginUser(request):
    name = request.data.get('name')
    password = request.data.get('password')

    try:
        user = Users.objects.get(name=name, password=password)
        return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
    except Users.DoesNotExist:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

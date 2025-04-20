from django.urls import path
from .views import listUsers, addUser, deleteUser, loginUser

urlpatterns = [
    path("users/", listUsers),
    path("addUser/", addUser),   #any path can be given and second parameter is a fucntion in views 
    path("deleteUser/<int:pk>/", deleteUser),
    path("login/",loginUser),
]
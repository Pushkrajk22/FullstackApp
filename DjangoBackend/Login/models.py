from django.db import models
from .models import Users

# Create your models here.

class Users(models.Model):
    name = models.CharField(max_length=50) #add unique=True for primary key
    password = models.CharField(max_length=128)

    def set_password(self, unhashed_password):
        from django.contrib.auth.hashers import make_password
        self.password = make_password(unhashed_password)

    def get_password(self, unhashed_password):
        from django.contrib.auth.hashers import check_password
        return check_password(unhashed_password, self.password)
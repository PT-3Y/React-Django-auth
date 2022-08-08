from pyexpat import model
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
# Create your models here.

class UserManager(BaseUserManager):

    def create_user(self, firstname=None, lastname=None, email=None, password=None, **kwargs):
        if firstname is None:
            raise TypeError('First Name is required')
        if lastname is None:
            raise TypeError('Last Name is required')
        if email is None:
            raise TypeError('Email is required')

        user = self.model(firstname=firstname, lastname=lastname, email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, firstname, lastname, email, password):

        if password is None:
            raise TypeError('Password is required')
        if email is None:
            raise TypeError('Email is required')
        if firstname is None:
            raise TypeError('First Name is required')
        if lastname is None:
            raise TypeError('Last Name is required')
        
        user = self.create_user(firstname, lastname, email, password)
        user.is_superuser = True
        user.is_stuff = True
        user.save(using=self._db)

        return user

class User(AbstractBaseUser, PermissionsMixin):
    firstname = models.CharField(db_index=True, max_length=20)
    lastname = models.CharField(db_index=True, max_length=20)
    email = models.EmailField(db_index=True, unique=True)
    is_allowed = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['firstname', 'lastname']

    objects = UserManager()

    def _str_(self):
        return f"self.email"
    

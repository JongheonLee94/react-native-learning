
from django.urls import path, include
from . import views
urlpatterns = [
    path('login/', views.logIn, name='login'),
    path('logout/', views.logout, name='logout'),
]
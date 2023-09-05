from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.getNotes, name='get-notes'),
    path('note/<str:pk>', views.getNote, name='get-note'),
    path('add', views.addNote, name='add-note'),
    path('update/<str:pk>', views.updateNote, name='update-note'),
    path('delete/<str:pk>', views.deleteNote, name='delete-note'),
]
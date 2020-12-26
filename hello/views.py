from django.shortcuts import render
from rest_framework.views import APIView 
from . models import React
from rest_framework.response import Response 
from . serializer import ReactSerializer
from django.views.decorators.cache import never_cache
from django.views.generic import TemplateView

# Create your views here.
index = never_cache(TemplateView.as_view(template_name='index.html'))

class ReactView(APIView): 
    
    serializer_class = ReactSerializer 
  
    def get(self, request): 
        detail = [ {"name": detail.name,"detail": detail.detail} for detail in React.objects.all()] 
        return Response(detail) 
  
    def post(self, request): 
        serializer = ReactSerializer(data=request.data) 
        if serializer.is_valid(raise_exception=True): 
            serializer.save() 
            return Response(serializer.data) 

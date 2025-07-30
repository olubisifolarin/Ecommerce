from django.shortcuts import render
from .models import Search
from django.http import JsonResponse


# Create your views here.
def search(request):
    query = request.GET.get("q")
    search_result = Search.objects.filter(category__icontains=query)
    return JsonResponse({'results': list(search_result.values())})
   
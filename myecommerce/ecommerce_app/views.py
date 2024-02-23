from django.shortcuts import render
from .models import Search

# Create your views here.
def search(request):
    query = request.GET.get("q")
    search_result = Search.objects.filter(fielsa_to_search__icontains=query)
    return render(request, "Search.jsx",{"search_result": search_result})

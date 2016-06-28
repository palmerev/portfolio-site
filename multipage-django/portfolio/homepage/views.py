from django.shortcuts import render


def index(request):
    return render(request, 'homepage/index.html')


def bio(request):
    return render(request, 'homepage/bio.html')


def about_site(request):
    return render(request, 'homepage/about-site.html')

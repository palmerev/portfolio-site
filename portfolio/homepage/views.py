from django.shortcuts import render


def index(request):
    return render(request, 'homepage/index.html')


def project_list(request):
    return render(request, 'homepage/project-list.html')


def project_detail(request, project_name):
    return render(request, 'homepage/project-detail.html', {'project_name': project_name})


def bio(request):
    return render(request, 'homepage/bio.html')


def about_site(request):
    return render(request, 'homepage/about-site.html')

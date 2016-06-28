from django.shortcuts import render
from portfolio.settings import MEDIA_URL, MEDIA_ROOT

from .models import Project, Tag


def project_list(request):
    """Render the list of all projects"""
    projects = Project.objects.all()
    return render(
        request,
        'projects/project-list.html',
        {
            "projects": projects,
            "media_url": MEDIA_URL,
            "media_root": MEDIA_ROOT
        }
    )


def project_detail(request, slug):
    """Render the detail page for the project matching slug"""
    project = Project.objects.get(slug=slug)
    return render(
        request,
        'projects/project-detail.html',
        {
            "project": project,
            "media_url": MEDIA_URL,
            "media_root": MEDIA_ROOT
        }
    )


def tag_list(request):
    """Render the list of all tags"""
    tags = Tag.objects.all()
    return render(request, 'projects/tag-list.html', {'tags': tags})


def projects_for_tag(request, slug):
    """Render the list of projects for the tag matching slug"""
    tag = Tag.objects.get(slug=slug)
    return render(request, 'projects/projects-for-tag.html', {'tag': tag})

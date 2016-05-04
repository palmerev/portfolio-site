from django.shortcuts import render


def project_list(request):
    """Render the list of all projects"""
    return render(request, 'projects/project-list.html')


def project_detail(request, slug):
    """Render the detail page for the project matching slug"""
    return render(request, 'projects/project-detail.html', {'slug': slug})


def tag_list(request):
    """Render the list of all tags"""
    return render(request, 'projects/tag-list.html')


def projects_for_tag(request, slug):
    """Render the list of projects for the tag matching slug"""
    return render(request, 'projects/projects-for-tag.html', {'slug': slug})

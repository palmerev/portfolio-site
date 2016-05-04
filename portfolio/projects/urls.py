from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^$', views.project_list, name='project_list'),
    # displays all tags for all projects
    url(r'^tags/$', views.tag_list, name='tag_list'),
    url(r'^(?P<slug>[\w\-]+)/$', views.project_detail, name='project_detail'),
    # displays all projects associated with a particular tag
    url(r'^tags/(?P<slug>[\w\-]+)/$', views.projects_for_tag, name='projects_for_tag'),
]

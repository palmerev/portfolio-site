from django.contrib import admin

from projects.models import Project, Tag

admin.site.register(Project)
admin.site.register(Tag)

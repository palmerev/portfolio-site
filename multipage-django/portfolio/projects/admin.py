from django.contrib import admin

from projects.models import Project, Tag, Snippet

admin.site.register(Project)
admin.site.register(Tag)
admin.site.register(Snippet)

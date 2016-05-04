from django.db import models
from portfolio.settings import THUMBNAIL_DIR


class Tag(models.Model):
    name = models.CharField(max_length=64)
    slug = models.SlugField()


class Project(models.Model):
    name = models.CharField(max_length=64)
    slug = models.SlugField()
    tags = models.ManyToManyField(Tag, related_name='projects', blank=True)
    short_description = models.CharField(
        max_length=255, default="No short description provided")
    long_description = models.TextField(default="No long description provided")
    gist_url = models.URLField()
    repo_url = models.URLField()
    site_url = models.URLField(blank=True)
    thumbnail = models.FilePathField(path=THUMBNAIL_DIR)

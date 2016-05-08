from django.db import models


class Tag(models.Model):
    name = models.CharField(max_length=64)
    slug = models.SlugField()

    def __str__(self):
        return "<Tag: {}>".format(self.slug)

    def __repr__(self):
        return self.__str__()


class Project(models.Model):
    name = models.CharField(max_length=64)
    slug = models.SlugField()
    tags = models.ManyToManyField(Tag, related_name='projects', blank=True)
    short_description = models.TextField(default="No short description provided")
    long_description = models.TextField(default="No long description provided")
    gist_url = models.URLField(blank=True)
    repo_url = models.URLField()
    site_url = models.URLField(blank=True)
    thumbnail = models.ImageField(blank=True)

    def __str__(self):
        return "<Project: {}>".format(self.slug)

    def __repr__(self):
        return self.__str__()

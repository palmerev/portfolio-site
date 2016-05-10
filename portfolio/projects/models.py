from django.db import models
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles

LEXERS = [item for item in get_all_lexers() if item[1]]
LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
STYLE_CHOICES = sorted((item, item) for item in get_all_styles())


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


class Snippet(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    code = models.TextField()
    linenos = models.BooleanField(default=False)
    language = models.CharField(choices=LANGUAGE_CHOICES, default='python', max_length=100)
    style = models.CharField(choices=STYLE_CHOICES, default='friendly', max_length=100)
    project = models.ForeignKey(Project, related_name="snippets")

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return "<Snippet:{} - {}>".format(self.language, self.title)

    def __repr__(self):
        return self.__str__()

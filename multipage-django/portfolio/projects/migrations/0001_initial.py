# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=64)),
                ('slug', models.SlugField()),
                ('short_description', models.CharField(default=b'No short description provided', max_length=255)),
                ('long_description', models.TextField(default=b'No long description provided')),
                ('gist_url', models.URLField(blank=True)),
                ('repo_url', models.URLField()),
                ('site_url', models.URLField(blank=True)),
                ('thumbnail', models.FilePathField(path=b'/home/evan/free-code-camp/portfolio-site/portfolio/projects/static/projects/images/')),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=64)),
                ('slug', models.SlugField()),
            ],
        ),
        migrations.AddField(
            model_name='project',
            name='tags',
            field=models.ManyToManyField(related_name='projects', to='projects.Tag', blank=True),
        ),
    ]

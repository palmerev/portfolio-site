# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-05-06 21:51
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_auto_20160506_2151'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='thumbnail',
            field=models.ImageField(blank=True, upload_to=''),
        ),
    ]

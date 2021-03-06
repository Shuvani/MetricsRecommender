# Generated by Django 3.2 on 2021-04-27 20:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gqm_api', '0005_auto_20210427_2029'),
    ]

    operations = [
        migrations.CreateModel(
            name='Metrics',
            fields=[
                ('name', models.CharField(max_length=250, primary_key=True, serialize=False, unique=True)),
                ('description', models.CharField(max_length=500)),
            ],
            options={
                'verbose_name': 'Metric',
                'verbose_name_plural': 'Metrics',
            },
        ),
        migrations.AddField(
            model_name='question',
            name='metrics',
            field=models.ManyToManyField(blank=True, to='gqm_api.Metrics'),
        ),
    ]

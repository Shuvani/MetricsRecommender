# Generated by Django 3.2 on 2021-04-15 08:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Goal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(max_length=500)),
            ],
            options={
                'verbose_name': 'Goal',
                'verbose_name_plural': 'Goals',
            },
        ),
        migrations.CreateModel(
            name='Metrics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250, unique=True)),
                ('description', models.CharField(max_length=500)),
            ],
            options={
                'verbose_name': 'Metric',
                'verbose_name_plural': 'Metrics',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('original_id', models.IntegerField(primary_key=True, serialize=False)),
            ],
            options={
                'verbose_name': 'User',
                'verbose_name_plural': 'Users',
            },
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(max_length=500)),
                ('goal_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gqm_api.goal')),
                ('metrics', models.ManyToManyField(blank=True, to='gqm_api.Metrics')),
            ],
            options={
                'verbose_name': 'Question',
                'verbose_name_plural': 'Questions',
            },
        ),
        migrations.AddField(
            model_name='goal',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='goals', to='gqm_api.user'),
        ),
    ]

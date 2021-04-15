from django.contrib import admin
from .models import *


class UsersAdmin(admin.ModelAdmin):
    list_display = ('original_id', )
    list_display_links = ('original_id', )


admin.site.register(User, UsersAdmin)


class GoalsAdmin(admin.ModelAdmin):
    list_display = ('id', 'content', 'user_id')
    list_display_links = ('id', 'content')


admin.site.register(Goal, GoalsAdmin)


class MetricsAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description')
    list_display_links = ('id', 'name', )


admin.site.register(Metrics, MetricsAdmin)


class QuestionsAdmin(admin.ModelAdmin):
    list_display = ('id', 'content', 'goal_id', 'get_metrics')
    list_display_links = ('id', 'content', )


admin.site.register(Question, QuestionsAdmin)
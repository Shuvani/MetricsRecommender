from django.conf.urls import url
from django.urls import path, include
from .views import *
from rest_framework import permissions
from rest_framework import routers
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title='Metrics recommender service API',
        default_version='v1',
        description="This is the API to work with goals, questions and metrics",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

router = routers.DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = [
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url('', include(router.urls)),
    url(r'^goals/$', GoalListCreateAPIView.as_view()),
    url(r'^goals/(?P<pk>[0-9]+)$', GoalDetailAPIView.as_view()),
    url(r'^metrics/$', MetricsListCreateAPIView.as_view()),
    url(r'^metrics/(?P<pk>[0-9]+)$', MetricsDetailAPIView.as_view()),
    url(r'^questions/$', QuestionListCreateAPIView.as_view()),
    url(r'^questions/(?P<pk>[0-9]+)$', QuestionDetailAPIView.as_view()),
    url(r'^questions/generate-metrics$', QuestionMetricsCreateAPIView.as_view()),
    url(r'^goals/questions/(?P<goal_id>[0-9]+)$', GoalQuestionsListAPIView.as_view()),
    url(r'^users/goals/(?P<user_id>[0-9]+)$', UserGoalsListAPIView.as_view()),
]

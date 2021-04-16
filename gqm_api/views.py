from rest_framework import generics
from rest_framework.views import APIView
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework import status
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema

from .metrics_generator import create_metrics


class GoalListCreateAPIView(generics.ListCreateAPIView):
    """
    get:
    API endpoint that returns a list of all existing goals.

    post:
    API endpoint to create a new goal.
    """
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer


class GoalDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    get:
    API endpoint that returns the goal with this primary key.

    put:
    API endpoint that updates the goal with this primary key.

    patch:
    API endpoint that partially updates the goal with this primary key.

    delete:
    API endpoint that deletes the goal with this primary key.
    """
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer


class MetricsListCreateAPIView(generics.ListCreateAPIView):
    """
    get:
    API endpoint that returns a list of all existing metrics.

    post:
    API endpoint that creates a new metrics.
    """
    queryset = Metrics.objects.all()
    serializer_class = MetricsSerializer


class MetricsDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    get:
    API endpoint that returns the metrics with this primary key.

    put:
    API endpoint that updates the metrics with this primary key.

    patch:
    API endpoint that partially updates the metrics with this primary key.

    delete:
    API endpoint that deletes the metrics with this primary key.
    """
    queryset = Metrics.objects.all()
    serializer_class = MetricsSerializer


class QuestionListCreateAPIView(generics.ListCreateAPIView):
    """
    get:
    API endpoint that returns a list of all existing questions.

    post:
    API endpoint to create a new question.
    """
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class QuestionDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    get:
    API endpoint that returns the question with this primary key.

    put:
    API endpoint that updates the question with this primary key.

    patch:
    API endpoint that partially updates the question with this primary key.

    delete:
    API endpoint that deletes the question with this primary key.
    """
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class QuestionMetricsCreateAPIView(APIView):
    content = openapi.Parameter('content',
                                openapi.IN_BODY,
                                type=openapi.TYPE_STRING
                                )
    goal_id = openapi.Parameter('goal_id',
                                openapi.IN_BODY,
                                type=openapi.TYPE_INTEGER
                                )

    @swagger_auto_schema(request_body=openapi.Schema(type=openapi.TYPE_OBJECT,
                                                     required=['content', 'goal_id'],
                                                     properties={
                                                         'content': openapi.Schema(type=openapi.TYPE_STRING),
                                                         'goal_id': openapi.Schema(type=openapi.TYPE_INTEGER)
                                                     },
                                                     ),
                         operation_description='Uninstall a version of Site')
    def post(self, request):
        """API endpoint to create a new question and automatically assign metrics."""
        content = request.data.get('content')
        goal_id = request.data.get('goal_id')
        metrics = create_metrics(content)
        data = {'content': content, 'goal_id': goal_id, 'metrics': metrics}
        serializer = QuestionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GoalQuestionsListAPIView(generics.ListAPIView):
    """
    get:
    API endpoint that returns a list of questions assigned to the goal.
    """
    serializer_class = QuestionSerializer
    lookup_field = "goal_id"

    def get_queryset(self):
        goal_id = self.kwargs['goal_id']
        return Question.objects.filter(goal_id=goal_id)

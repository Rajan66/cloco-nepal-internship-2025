from django.urls import path

from . import views

app_name = "main"
urlpatterns = [
    path("", views.IndexView.as_view(), name="index"),
    # path("users/", views.UsersView.as_view(), name="users"),
    path("users/", views.users, name="users"),
    path("<int:pk>/", views.DetailsView.as_view(), name="details"),
    path("<int:pk>/results/", views.ResultsView.as_view(), name="results"),
    path("<int:question_id>/vote/", views.vote, name="vote"),
]

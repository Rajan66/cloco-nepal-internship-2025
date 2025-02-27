from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from users.forms import UserRegistrationForm

# Create your views here.


def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data["email"]
            password = form.cleaned_data["password1"]
            user = authenticate(email=email, password=password)
            login(request, user)
            return redirect('home')
    else:
        form = UserRegistrationForm()
    return render(request, 'users/register.html', {"form": form})

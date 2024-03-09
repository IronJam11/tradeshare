from django.contrib.auth import authenticate, login

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from myapp.models import User
import json

def Authenticate(username):
    # print("here")

    user = User.objects.get(username=username)
    return user


class LoginAPIView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        # Authenticate user
        user = Authenticate(username=username)
        print(user)

        if user:
            # Login the user
            login(request, user)
            user_data = {
                "username": username
                # Add other user attributes as needed
            }
            # Return the session ID instead of token
            user_json = json.dumps(user_data)
            return Response(
                {"session_id": request.session.session_key,"user":user_json},
            )
        else:
            return Response(
                {"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
            )


class RegisterAPIView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        email = request.data.get("email")
        pan_card = request.data.get("pan card")
        if not username or not password:
            return Response(
                {"error": "Username and password are required"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if User.objects.filter(username=username).exists():
            return Response(
                {"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST
            )

        user = User.objects.create_user(
            username=username, password=password, email=email, pan_card=pan_card
        )
        return Response(
            {"message": "User registered successfully"}, status=status.HTTP_201_CREATED
        )

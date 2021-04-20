from django.shortcuts import render

import hashlib
import string
import random
from django.contrib.auth.decorators import login_required
from django.db.models import Sum
from django.http import JsonResponse,  HttpResponse
from django.contrib import auth
#csrf 임시방안
from django.utils.datetime_safe import datetime
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
from django.contrib import auth

# Create your views here.
@method_decorator(csrf_exempt, name='dispatch')
def logIn(request):
    print("로그인")
    try:
        json_data = json.loads(request.body)
    except:
        return JsonResponse({"isLogined": False}, status=403)

    id=json_data['id']
    password = json_data['password']
    print(id,password)
    user = auth.authenticate(request, username=id, password=password)

    print(user)
    if user is not None:
        auth.login(request, user)
        result = {"isLogined": True,"id":id}
        return JsonResponse(result, status=200)

    return JsonResponse({"isLogined": False,"text":"실패"}, status=403)



@method_decorator(csrf_exempt, name='dispatch')
def logout(request):
    print("로그아웃")
    print(request.user)
    auth.logout(request)
    print(request.user)
    return JsonResponse({"isLogined": False,"text":"로그아웃"}, status=200)
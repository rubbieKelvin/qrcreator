from django.shortcuts import render
from django.http import HttpResponse

from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt

from .qrgen import getqr

def index(request):
    return render(request, "index.html")

@require_http_methods(["POST"])
@csrf_exempt
def qr(request):
    res = getqr(request.body.decode("utf8"))
    return HttpResponse(res)
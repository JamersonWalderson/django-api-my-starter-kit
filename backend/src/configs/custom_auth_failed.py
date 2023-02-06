from rest_framework.exceptions import AuthenticationFailed
from rest_framework import exceptions
from rest_framework.response import Response

def custom_exception_handler(exc, context):
    if isinstance(exc, AuthenticationFailed):
        return Response({
            "message": "Conta não encontrada."
        }, status=401)

    return exceptions.exception_handler(exc, context)
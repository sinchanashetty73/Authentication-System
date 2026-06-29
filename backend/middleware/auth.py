from flask_jwt_extended import jwt_required

def protected_route(func):
    return jwt_required()(func)
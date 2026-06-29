from flask import Blueprint, request, jsonify
from extensions import mongo
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import bcrypt
import re

auth_bp = Blueprint("auth", __name__)


# -------------------------------
# Register
# -------------------------------
@auth_bp.route("/register", methods=["POST"])
def register():

    data = request.get_json()

    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not username or not email or not password:
        return jsonify({"message": "All fields are required"}), 400

    # Email validation
    regex = r'^[\w\.-]+@[\w\.-]+\.\w+$'

    if not re.match(regex, email):
        return jsonify({"message": "Invalid Email"}), 400

    if len(password) < 6:
        return jsonify({"message": "Password must be at least 6 characters"}), 400

    user = mongo.db.users.find_one({"email": email})

    if user:
        return jsonify({"message": "Email already exists"}), 400

    hashed = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())

    mongo.db.users.insert_one({
        "username": username,
        "email": email,
        "password": hashed
    })

    return jsonify({"message": "Registration Successful"}), 201


# -------------------------------
# Login
# -------------------------------
@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"message": "Email and Password required"}), 400

    user = mongo.db.users.find_one({"email": email})

    if not user:
        return jsonify({"message": "Invalid Credentials"}), 401

    if not bcrypt.checkpw(password.encode("utf-8"), user["password"]):
        return jsonify({"message": "Invalid Credentials"}), 401

    token = create_access_token(identity=email)

    return jsonify({
        "message": "Login Successful",
        "token": token
    })


# -------------------------------
# Protected Dashboard
# -------------------------------
@auth_bp.route("/dashboard", methods=["GET"])
@jwt_required()
def dashboard():

    current_user = get_jwt_identity()

    return jsonify({
        "message": "Welcome",
        "user": current_user
    })
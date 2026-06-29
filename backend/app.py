from flask import Flask
from flask_cors import CORS
from config import Config
from extensions import mongo, jwt
from routes.auth_routes import auth_bp


def create_app():
    app = Flask(__name__)

    app.config["MONGO_URI"] = Config.MONGO_URI
    app.config["JWT_SECRET_KEY"] = Config.JWT_SECRET_KEY

    CORS(app)

    mongo.init_app(app)
    jwt.init_app(app)

    # Register Blueprint
    app.register_blueprint(auth_bp)

    @app.route("/")
    def home():
        return {"message": "Authentication API Running"}

    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
from flask import Flask, request
import json
from Serializer import Serializer
from models.user import userModel

from routes.user import user_route
from helpers.database import db

app = Flask(__name__, instance_relative_config=True)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://postgres:example@localhost:5433/db1"
app.register_blueprint(userModel)
app.register_blueprint(user_route)

with app.app_context():
    db.init_app(app)
    db.create_all()

if __name__ == '__main__':
    app.run(debug = True)
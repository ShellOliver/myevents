from __init__ import db
from Serializer import Serializer

class User(db.Model, Serializer):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def serialize(self):
		return Serializer.serialize(self)

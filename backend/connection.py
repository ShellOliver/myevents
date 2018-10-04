from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
#use postgres
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://postgres:example@localhost:5433'
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username
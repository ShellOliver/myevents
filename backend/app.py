from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config.from_object('config')
db = SQLAlchemy(app)
db.init_app(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username
    
    def __str__(self):
        return '<User %r>' % self.username


@app.route('/user', methods=['POST'])
def addUser():
    db.create_all()
    user = User(username = request.form['username'],email = request.form['email'])
    db.session.add(user)
    db.session.commit()
    return user.__str__()

@app.route('/user')
def getUsers():
    return 'list'
    # return json.dumps(User.query.all())

if __name__ == '__main__':
    app.run(debug = True)
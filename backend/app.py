from __init__ import db, app, request
from models import User
import json

@app.route('/user', methods=['POST'])
def addUser():
    user = User(username = request.form['username'],email = request.form['email'])
    db.session.add(user)
    db.session.commit()
    return user.__str__()

@app.route('/user')
def getUsers():
    userFound = User.query.get(1)
    return json.dumps(userFound.serialize())

if __name__ == '__main__':
    db.create_all()
    app.run(debug = True)
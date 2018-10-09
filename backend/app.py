from __init__ import db, app, request
from models import User
import json
from sqlalchemy.inspection import inspect
import Serializer

@app.route('/user', methods=['PUT'])
def addUser():
    user = User()
    user = user.filteredObject(request.form)
    db.session.add(user)
    db.session.commit()
    return user.__str__()

@app.route('/user')
def getUsers():
    userListFound = User.query.all()
    return json.dumps(User.serialize_list(userListFound))

@app.route('/user/<int:id>', methods=['POST'])
def getUser(id):
    userFound = User.query.get(id)
    userFound.username = request.form['username']
    db.session.commit()
    return json.dumps(userFound.serialize())

@app.route('/user/<int:id>', methods=['DELETE'])
def deleteUser(id):
    userFound = User.query.get(id)
    db.session.delete(userFound)
    db.session.commit()
    return 'deleted'

if __name__ == '__main__':
    db.create_all()
    app.run(debug = True)
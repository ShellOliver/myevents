from models.user import User
from flask import Blueprint, request
from helpers.database import db

user_route = Blueprint('routes', __name__)

@user_route.route('/user', methods=['PUT'])
def addUser():
    user = User()
    user = user.filteredObject(request.form)
    db.session.add(user)
    db.session.commit()
    return user.__str__()

@user_route.route('/user')
def getUsers():
    userListFound = User.query.all()
    return json.dumps(User.serialize_list(userListFound))

@user_route.route('/user/<int:id>', methods=['POST'])
def getUser(id):
    userFound = User.query.get(id)
    userFound.username = request.form['username']
    db.session.commit()
    return json.dumps(userFound.serialize())

@user_route.route('/user/<int:id>', methods=['DELETE'])
def deleteUser(id):
    userFound = User.query.get(id)
    db.session.delete(userFound)
    db.session.commit()
    return 'deleted'
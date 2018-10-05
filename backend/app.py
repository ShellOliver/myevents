from __init__ import db, app, request
from models import User

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
from flask import Flask
app = Flask(__name__)

@app.route('/user')
def getUsers():
    return "Hello World!"

if __name__ == '__main__':
    app.run(debug = True)
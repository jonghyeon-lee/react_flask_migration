from flask import Flask, render_template
from flask import Response
from flask import request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['POST','GET'])
def login():
	admin_id = request.form['admin_id']
	admin_pw = request.form['admin_pw']

	if admin_id == "admin" and admin_pw == "0000":
		return render_template('index.html')
	else:
		return render_template('login.html')


@app.route('/hello')
def hello():
    return render_template('hello.html')


if __name__ == '__main__':
    app.run(debug=True)

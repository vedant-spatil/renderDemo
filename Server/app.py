from flask import Flask, request, jsonify
from flask_cors import CORS # type: ignore

app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route("/")
def home():
    return "HomePage"

@app.route("/api/data",methods=['GET'])
def data():
    resp = jsonify({
                "message": ['I love JoJo`s Bizzare Adventures', 'I love Kendrick Lamar']
            })
    resp.status_code = 201
    return resp
    


if __name__=="__main__":
    app.run(debug=True)
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    # Ici: appel du modèle ML (déjà entraîné)
    # result = predict_nutriscore(data['ingredients'])
    return jsonify({"nutriscore": "b", "nova": 4})

if __name__ == "__main__":
    app.run(port=5000)

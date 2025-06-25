from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/health')
def health():
    return jsonify(status='healthy')

@app.route('/data')
def data():
    return jsonify(data=[1, 2, 3, 4, 5])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

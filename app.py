from flask import Flask, request, jsonify, render_template
import pickle
import numpy as np

# Initialize Flask app
app = Flask(__name__)

# Load the trained model
with open('best_chronic_kidney_diseasemodel.pkl', 'rb') as f:
    model = pickle.load(f)


# Route for the home page
@app.route('/')
def home():
    return render_template('index.html')

# Route to handle prediction requests
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from the request
        data = request.json
        features = np.array(data['features']).reshape(1, -1)  # Reshape for prediction
        
        # Make prediction
        prediction = model.predict(features)
        if prediction[0] == 1:
            result = 'Patient has Chronic Kidney Disease'
        else:
            result = 'Patient does not have Chronic Kidney Disease'
        
        # Return the result as JSON
        return jsonify({'prediction': result})
    
    except Exception as e:
        return jsonify({'error': str(e)})

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
# 🧠 Chronic Kidney Disease Prediction App

A Machine Learning-powered web application that predicts whether a patient has **Chronic Kidney Disease (CKD)** based on medical input parameters.

Built using **Flask, Python, and Scikit-learn**, this app provides a simple UI for entering patient data and getting instant predictions.

---

## 🚀 Features

* 🔍 Predict CKD using trained ML model
* 🌐 User-friendly web interface
* ⚡ Fast real-time predictions
* 📊 Handles multiple medical parameters
* 🧪 Backend powered by Scikit-learn model

---

## 🛠️ Tech Stack

* **Frontend:** HTML, Bootstrap, JavaScript (jQuery)
* **Backend:** Python, Flask
* **Machine Learning:** Scikit-learn
* **Deployment:** Gunicorn, Render / Railway

---

## 📁 Project Structure

```
kidney-disease-app/
│
├── app.py
├── requirements.txt
├── Procfile
├── best_chronic_kidney_diseasemodel.pkl
│
├── templates/
│   └── index.html
│
├── static/
│   └── script.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/kidney-disease-app.git
cd kidney-disease-app
```

### 2️⃣ Create virtual environment (optional but recommended)

```
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows
```

### 3️⃣ Install dependencies

```
pip install -r requirements.txt
```

### 4️⃣ Run the application

```
python app.py
```

Open browser and go to:

```
http://127.0.0.1:5000/
```

---

## 🧾 Input Features

The model takes the following medical inputs:

* Age
* Blood Pressure
* Specific Gravity
* Albumin
* Sugar
* Red Blood Cells
* Pus Cell
* Bacteria
* Blood Glucose Random
* Blood Urea
* Serum Creatinine
* Sodium
* Potassium
* Hemoglobin
* Packed Cell Volume
* White Blood Cell Count
* Red Blood Cell Count
* Hypertension
* Diabetes Mellitus
* Coronary Artery Disease
* Appetite
* Pedal Edema
* Anemia

---

## 🧠 Model Information

* Algorithm: Machine Learning Classification Model
* Trained using CKD dataset
* Output:

  * **1 → CKD Detected**
  * **0 → No CKD**

---

## 📸 Screenshots

(Add screenshots here after deployment)

---

## 🌍 Deployment

You can deploy this project using:

* Render
* Railway
* PythonAnywhere

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repo and submit a pull request.

---

## 📧 Contact

**M. Tholkappiyan**
📩 Email: [tholkappiyanm7@gmail.com](mailto:tholkappiyanm7@gmail.com)

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!

---

from flask import Flask,render_template, url_for, request, redirect, flash
from flask_login import login_required
import numpy as np
import pickle
import os
import json
import base64
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from dotenv import load_dotenv

app = Flask(__name__)

load_dotenv()

encoded_key = os.getenv('serviceAccountKey')
cred= json.loads(base64.b64decode(encoded_key).decode('utf-8'))
cred=credentials.Certificate(cred)

firebase_admin.initialize_app(cred)
db=firestore.client()

heartmodel=pickle.load(open("./artifacts/heartmodel.pkl","rb"))
heartscale=pickle.load(open("./artifacts/heartscalar.pkl","rb"))
strokemodel=pickle.load(open("./artifacts/strokemodel.pkl","rb"))
strokescale=pickle.load(open("./artifacts/strokescalar.pkl","rb"))

@app.route('/', methods=['GET','POST'])
def index():
    return render_template('index.html')

@app.route('/login', methods=["GET","POST"])
def login():
    if request.method=="POST":
        username=request.form["username"]
        password=request.form["password"]
        if username==password:
            docs=db.collection(username).get()
            docs=[x.to_dict() for x in docs]
            return render_template('bookings.html',docs=docs)
    return render_template('login.html')

@app.route('/strokepredict', methods=['GET','POST'])
def strokepredict():
    if request.method=="POST":
        age=request.form['age']
        hypertensionStatus=request.form.get('hypertensionStatus')
        heartDisease=request.form.get('heartDisease')
        maritalStatus=request.form.get('maritalStatus')
        glucoseLevel=request.form['glucoseLevel']
        details=strokescale.transform(np.array([age,glucoseLevel]).reshape(1,-1))
        age=details[0][0]
        glucoseLevel=details[0][1]
        data=[age,hypertensionStatus,heartDisease,maritalStatus,glucoseLevel]
        data=np.array(data).astype(float).reshape(1,-1)
        prediction_prob=strokemodel.predict_proba(data)[0][1]
        prediction_prob=round(prediction_prob*100,2)
        return render_template('strokeresults.html',prediction=prediction_prob)
    return render_template('strokepredict.html')

@app.route('/heartpredict', methods=['GET','POST'])
def heartpredict():
    if request.method=="POST":
        gender=request.form.get('gender')
        chestpain=request.form.get('ChestPain')
        exericseAngina=request.form.get('ExericseAngina')
        oldPeak=request.form['oldPeak']
        maxHR=request.form['maxHR']
        stSlope=request.form.get('ST_Slope')
        details=heartscale.transform(np.array([maxHR,oldPeak]).reshape(1,-1))
        maxHR=details[0][0]
        oldPeak=details[0][1]
        data=[gender,chestpain,maxHR,exericseAngina,oldPeak,stSlope]
        data=np.array(data).astype(float).reshape(1,-1)
        prediction_prob=heartmodel.predict_proba(data)[0][1]
        prediction_prob=round(prediction_prob*100,2)
        return render_template('heartresults.html',prediction=prediction_prob)
    return render_template('heartpredict.html')

@app.route('/bookbed',methods=["GET","POST"])
def bookbed():
    if request.method=="POST":
        p_fname=request.form["first-name"]
        p_lname=request.form["last-name"]
        p_name=p_fname+" "+p_lname
        p_age=request.form["age"]
        h_name=request.form.get("hospital-name-select")
        p_prob=request.form["problem"]
        p_ambulance=request.form.get("call-ambulance")
        p_mob=request.form["mob-number"]
        p_add=request.form["address"]
        p_feedback=request.form["feedback"]
        id=len(db.collection(h_name).get())
        data={"Name":p_name,"Age":p_age,"Problem":p_prob,"Need_Ambulance":p_ambulance,
              "Mobile_Number":p_mob,"Address":p_add,"Feedback":p_feedback,"Bookin_ID":id}
        db.collection(h_name).document(p_name).set(data,merge=True)
        return render_template("bedresult.html")
    return render_template('bookbed.html')

@app.route('/disease',methods=["GET","POST"])
def disease():
    return render_template('disease.html')

@app.route('/medicine',methods=["GET","POST"])
def medicine():
    return render_template('medicine.html')

@app.route('/appoint',methods=["GET","POST"])
def appoint():
    return render_template('appoint.html')

@app.route('/stomach',methods=["GET","POST"])
def stomach():
    return render_template('stomach.html')

if __name__ == '__main__':
    app.run(debug=True, port=8080, host='0.0.0.0')
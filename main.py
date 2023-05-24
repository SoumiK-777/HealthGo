from flask import Flask,render_template, request, redirect, session
import numpy as np
import pickle
import os
import json
import base64
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
import firebase_admin
from firebase_admin import auth,credentials,firestore
from dotenv import load_dotenv

app = Flask(__name__)
app.config['SECRET_KEY']="secretkey123"

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
    return render_template('finalindex.html')

@app.route('/login', methods=["GET","POST"])
def login():
    p_status=session.get('p_logged_in')
    h_status=session.get('h_logged_in')
    d_status=session.get('d_logged_in')
    return render_template('loginfinal.html',p_status=p_status,h_status=h_status,d_status=d_status)

@app.route('/psignup', methods=['GET','POST'])
def psignup():
    if request.method=="POST":
        fname=request.form["fname"]
        lname=request.form["lname"]
        name=fname+" "+lname
        dob=request.form["dob"]
        gender=request.form["gender"]
        bg=request.form["bg"]
        diabetes=request.form["diabetes"]
        mhistory=request.form["mhistory"]
        mob_number=request.form["mob_number"]
        address=request.form["address"]
        email=request.form["email"]
        password=request.form["password"]
        auth.create_user(email=email,password=password)
        data={"Name":name,"DOB":dob,"gender":gender,"BloodGroup":bg, "Diabetes":diabetes,"History":mhistory,"Mobile":mob_number,"Address":address,"email":email}
        db.collection("Patients").document(email).set(data,merge=True)
        return redirect('/login')
    return render_template('patientsignup.html')

@app.route('/plogin',methods=['GET','POST'])
def plogin():
    if request.method=="POST":
        username=request.form["username"]
        try:
            user=auth.get_user_by_email(username)
            session['p_user_id'] = user.uid
            session['p_logged_in']=True
            return redirect('pdashboard')
        except:
            return "NOT FOUND"
    return render_template('loginfinal.html')

@app.route('/plogout')
def plogout():
    session['p_logged_in']=False
    return redirect('/login')

@app.route('/pdashboard',methods=['GET','POST'])
def pdashboard():
    user_id=session.get('p_user_id')
    if user_id and session.get('p_logged_in'):
        user=auth.get_user(user_id)
        patient=db.collection("Patients").document(user.email).get()
        patient=patient.to_dict()
        return render_template('patient.html',patient=patient)
    else:
        return redirect('/login')

@app.route('/dsignup', methods=['GET','POST'])
def dsignup():
    if request.method=="POST":
        fname=request.form["fname"]
        lname=request.form["lname"]
        name=fname+" "+lname
        dob=request.form["dob"]
        gender=request.form["gender"]
        special=request.form["special"]
        exp=request.form["exp"]
        qualif=request.form["qualif"]
        mob_number=request.form["mob_number"]
        address=request.form["address"]
        email=request.form["email"]
        password=request.form["password"]
        auth.create_user(email=email,password=password)
        data={"Name":name,"DOB":dob,"gender":gender,"Specialization":special, "Experience":exp,"Qualification":qualif,"Mobile":mob_number,"Address":address,"email":email}
        db.collection("Doctors").document(email).set(data,merge=True)
        return redirect('/login')
    return render_template('doctorsign.html')


@app.route('/dlogin',methods=['GET','POST'])
def dlogin():
    if request.method=="POST":
        username=request.form["username"]
        try:
            user=auth.get_user_by_email(username)
            session['d_user_id'] = user.uid
            session['d_logged_in']=True
            return redirect('ddashboard')
        except:
            return "NOT FOUND"
    return render_template('loginfinal.html')

@app.route('/dlogout')
def dlogout():
    session['d_logged_in']=False
    return redirect('/login')

@app.route('/ddashboard',methods=['GET','POST'])
def ddashboard():
    user_id=session.get('d_user_id')
    if user_id and session.get('d_logged_in'):
        user=auth.get_user(user_id)
        doctor=db.collection("Doctors").document(user.email).get()
        doctor=doctor.to_dict()
        return render_template('doctordashboard.html',doctor=doctor)
    else:
        return redirect('/login')

@app.route('/hsignup', methods=['GET','POST'])
def hsignup():
    if request.method=="POST":
        name=request.form["name"]
        numberOfDoctors=request.form["numberOfDoctors"]
        ambulance=request.form["ambulance"]
        beds=request.form["beds"]
        number=request.form["number"]
        ambnumber=request.form["ambnumber"]
        address=request.form["address"]
        email=request.form["email"]
        password=request.form["password"]
        user=auth.create_user(email=email,password=password,display_name=name,phone_number=number)
        data={"Name":name,"Email":email,"Address":address,"Ambulance":int(ambulance),"Beds":int(beds),"Number":number, "NumberOfDoctor":int(numberOfDoctors),"AmbulanceNumber":ambnumber}
        db.collection("Hospitals").document(email).set(data,merge=True)
        return redirect('/login')

    return render_template('hospitalSignup.html')

@app.route('/hlogin',methods=['GET','POST'])
def hlogin():
    if request.method=="POST":
        username=request.form["username"]
        try:
            user=auth.get_user_by_email(username)
            session['h_user_id'] = user.uid
            session['h_logged_in']=True
            return redirect('/hdashboard')
        except:
            return "NOT FOUND"
    return render_template('loginfinal.html')

@app.route('/hdashboard',methods=['GET','POST'])
def hdashboard():
    user_id=session.get('h_user_id')
    if user_id:
        user=auth.get_user(user_id)
        hospital=db.collection("Hospitals").document(user.email).get()
        hospital=hospital.to_dict()
        bookings=[]
        collections = db.collection('Hospitals').document(user.email).collections()
        for collection in collections:
            for doc in collection.stream():
                bookings.append(doc.to_dict())
        return render_template('hospital.html',hospital=hospital,bookings=bookings)
    else:
        return redirect('/login')

@app.route('/hlogout')
def hlogout():
    session['h_logged_in']=False
    return redirect('/login')

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
        return render_template('strokePredictorResult.html',prediction=prediction_prob)
    return render_template('strokePredictor.html')

@app.route('/heartpredict', methods=['GET','POST'])
def heartpredict():
    if request.method=="POST":
        gender=request.form.get('gender')
        chestpain=request.form.get('ChestPain')
        exericseAngina=request.form.get('ExerciseAngina')
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
        return render_template('heartPredictorResult.html',prediction=prediction_prob)
    return render_template('heartPredictor.html')

@app.route('/bookbed',methods=["GET","POST"])
def bookbed():
    hospitals=db.collection("Hospitals").get()
    hospitals=[x.to_dict() for x in hospitals]
    if request.method=="POST":
        p_fname=request.form["first_name"]
        p_lname=request.form["last_name"]
        p_name=p_fname+" "+p_lname
        p_age=request.form["age"]
        p_gender=request.form.get('gender')
        h_name=request.form.get("hospital-name-select")
        p_prob=request.form["problem"]
        p_ambulance=request.form.get("call-ambulance")
        p_mob=request.form["phone"]
        p_add=request.form["address"]+'-'+request.form['pin']
        p_email=request.form['email']
        p_feedback=request.form["feedback"]
        id=h_name[:3]+str(np.random.randint(100,200))
        data={"Name":p_name,"Age":p_age,"Gender":p_gender,"Email":p_email,"Problem":p_prob,"Need_Ambulance":p_ambulance,"Mobile_Number":p_mob,"Address":p_add,"Feedback":p_feedback,"Bookin_ID":id,"Hospital":h_name}
        check=db.collection("Hospitals").document(h_name).collection("Bookings").document(p_email).get()
        if check.exists:
            return render_template("bedresult.html",data=check.to_dict())
        else:
            db.collection("Hospitals").document(h_name).collection("Bookings").document(p_email).set(data,merge=True)
            collection=db.collection("Hospitals").document(h_name)
            collection.update({"Beds":firestore.Increment(-1)})
            if p_ambulance=="Yes":
                collection.update({"Ambulance":firestore.Increment(-1)})
            return render_template("bedresult.html",data=data)
    return render_template('bedbook.html',hospitals=hospitals)

@app.route('/disease',methods=["GET","POST"])
def disease():
    return render_template('commonDisease.html')

@app.route('/medicine',methods=["GET","POST"])
def medicine():
    return render_template('medicine.html')

@app.route('/appoint',methods=["GET","POST"])
def appoint():
    return render_template('appoint.html')

@app.route('/faqs',methods=["GET","POST"])
def faqs():
    return render_template('faqs.html')

if __name__ == '__main__':
    app.run(port=8080)
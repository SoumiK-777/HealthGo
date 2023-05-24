// toggling menu bar
function toggleMenu(){
    var container=document.querySelector(".div2");
    container.classList.toggle("active");
}
var title=document.querySelector("title");
title.innerHTML = "";
// title.innerHTML=``;
document.querySelector("head").insertAdjacentHTML('beforeend',`<link rel="shortcut icon" href="/images/medical.png" type="image/x-icon" id="icon">`)

// title
var i = 0;                  
function myLoop() {         
  setTimeout(function(){  
    if(i==0){
      title.innerHTML="Health GO";
      myLoop();
    }                    
    if(i==1){
      title.innerHTML="Health GO | ";
      myLoop();
    } 
    if(i==2){
      title.innerHTML="Health GO | M";
      myLoop();
    }
    if(i==3){
      title.innerHTML="Health GO | Me";
      myLoop();
    }
    if(i==4){
      title.innerHTML="Health GO | Med";
      myLoop();
    }
    if(i==5){
      title.innerHTML="Health GO | Medi";
      myLoop();
    }
    if(i==6){
      title.innerHTML="Health GO | Medic";
      myLoop();
    }
    if(i==7){
        title.innerHTML="Health GO | Medici";
        myLoop();
    }
    if(i==8){
        title.innerHTML="Health GO | Medicin";
        myLoop();
    }
    if(i==9){
        title.innerHTML="Health GO | Medicine";
        myLoop();
    }
    if(i==10){
        i=0;
        myLoop();
    }
    i++; 
  }, 400)
}
myLoop();


// var gin = document.getElementById("gin");
// var gin = document.getElementById("gin");
var card = document.querySelectorAll(".card")
var gin= document.querySelectorAll(".gin")





gin.forEach(ging => {
    

ging.addEventListener("mouseover", function (event) {
    for (var i = 0; i < card.length; i++) {
        // event.classList.add("newcard")
        card[i].classList.add("newcard");

    }
})
ging.addEventListener("mouseleave", function () {
    for (var i = 0; i < card.length; i++) {
        card[i].classList.remove("newcard");
    }
})
});

var body=document.querySelector("body");
// body.innerHTML="<h2>aditya<h2>";\
document.querySelector('body').insertAdjacentHTML('beforebegin',
    `<!-- nav-bar -->

    <div id="title-bar">

        <div class="div1" id="div1">
                
                    <div class="div1-1">
                
                        <div class="div1-1-1">
                
                        </div>
                
                        <div class="div1-1-2" id="div1-1-2">
                            <img src="{{url_for('static',filename='images/logo-no-background.png')}}" alt="img">
                        </div>
                
                        <div class="div1-1-3">
                
                        </div>
                
                    </div>
                
                    <div class="div1-2">
                
                        <ul class="list" id="list">
                            <div class="cont1">
                                <li class="l1"><img src="{{url_for('static',filename='images/home-icon-silhouette.png')}}"
                                        class="l1img1"><a href="http://127.0.0.1:5501/index.html" target="_blank" class="lia1"
                                        id="lia1">Home</a></li>
                                <div class="line1" id="line1"></div>
                            </div>
                
                            <li class="l2"><img src="{{url_for('static',filename='images/information.png')}}" class="l2img2"><a href="#"
                                    target="_blank" class="lia2" id="lia2">About us</a></li>
                            <li class="l3"><img src="{{url_for('static',filename='images/customer-support.png')}}" class="l3img3"><a
                                    href="http://127.0.0.1:5502/medicine.html" target="_blank" class="lia3" id="lia3">Services</a></li>
                            <li class="l4"><img src="{{url_for('static',filename='images/support.png')}}" class="l4img4"><a
                                    href="http://127.0.0.1:5502/medicine.html" target="_blank" class="lia4" id="lia4">Patient
                                    Resources</a></li>
                            <li class="l5"><img src="{{url_for('static',filename='images/appointment.png')}}" class="l5img5"><a
                                    href="http://127.0.0.1:5500/index.html" target="_blank" class="lia5" id="lia5">Appointment</a></li>
                            <li class="l6"><img src="{{url_for('static',filename='images/notebook-of-contacts.png')}}" class="l6img6"><a
                                    href="http://127.0.0.1:5500/index.html" target="_blank" class="lia6" id="lia6">Contact us</a></li>
                            <li class="l7"><img src="{{url_for('static',filename='images/faq.png')}}" class="l7img7"><a
                                    href="https://www.healthline.com/health/bezzy-psoriasis-frequently-asked-questions" target="_blank"
                                    class="lia7" id="lia7">FAQs</a></li>
                        </ul>
                
                    </div>
                
                </div>
    
        </div>`);

        document.querySelector('body').insertAdjacentHTML('beforeend',`
        <!-- footer -->

    <div class="footer" id="footer">

        <div class="f-img">
            <img src="{{url_for('static',filename='images/logo-no-background.png')}}" alt="footer-image" class="f-image" id="f-image">
        </div>

        <div class="f-mid" id="f-mid">
             <div class="f-contents" id="f-contents">
                <div class="f-cont-para" id="f-cont-para">
                    <p>KEY FEATURES :- </p><br>
                </div>
                <div class="f-cont-list"> 
                    <ul>
                        <li><a href="#">STROKE PREDICTOR</a></li>
                        <li><a href="#">HEART PREDICTOR</a></li>
                        <li><a href="#">BED BOOKING</a></li>
                        <li><a href="#">APPOINT A DOCTER</a></li>
                    </ul>
                </div>
                <div class="policy">
                    <ul>
                        <li>PRIVACY POLICY</li>
                        <li>TERMS AND CONDITIONS</li>
                    </ul>
                </div>
             </div>
             <div class="f-app" id="f-app">
                <div class="app1">
                    <p>LET'S GO <span class="android"> &nbsp ANDROID</span></p>
                </div>
                <div class="app2">
                    <button type="button" for="" value="" onclick="getMyLink()" class="button">Download</button>
                </div>
                <div class="app3">
                    <p>for best user experience</p>
                </div>
             </div>
             <div class="f-social" id="f-social">
                <div class="follow-us">
                    <p>FOLLOW US</p>
                </div>
                <div class="social-icons">
                        <img src="https://cdn-icons-png.flaticon.com/512/6033/6033716.png" alt="meta" onclick="gotometa()">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="twitter" onclick="gototwitter()">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111499.png" alt="google" onclick="gotogoogle()">
                </div>
                <div class="mail">
                    <br>
                    <p><span class="chat">LET's CHAT</span><br>
                    healthgo123@gmail.com <br>
                    +91 1234567890 <br>
                    +91 1234567890</p>
                </div>
             </div>
        </div>

        <div class="copyright" id="copyright">
            <!-- <div class="f-c-1"> 
                <p>© 2023 HealthGO | All rights are reserved.| India</p>
            </div> -->
            <div class="made">
                <p>made with <span class="love"> &nbsp♥&nbsp</span> by <span class="rt"> &nbsp RUNTIME TERROR</span></p>
            </div>
            <div class="consi">
                <div class="contributors">
                    <p> Contributors : <span class="auto-type"></span></p>
                </div>
                <div class="rights">
                    <p>© 2023 HealthGO | All rights are reserved.| India</p>
                </div>
            </div>
            
        </div>

    </div>
    
    <!-- js -->
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <script src="/strokePredictorResult.js"></script>`);

    // footer
function getMyLink(){
    window.open("https://www.google.com");
  }
  
  function gotometa(){
    window.open("https://www.meta.com");
  }
  
  function gototwitter(){
    window.open("https://www.instagram.com");
  }
  
  function gotogoogle(){
    window.open("https://www.linkedin.com");
  }
  
  var typed = new Typed(".auto-type", {
    strings: ["SOUMIK KUMAR GHOSAL","KARTIK ORAON","ADITYA KUMAR","NILESH GUPTA"],
    typeSpeed: 200,
    backSpeed: 100,
    loop: true
  })


  

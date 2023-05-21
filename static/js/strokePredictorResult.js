// title
var i = 0;                  
function myLoop() {         
  setTimeout(function(){  
    if(i==0){
      document.getElementById("title").innerHTML="Health GO";
      myLoop();
    }                    
    if(i==1){
      document.getElementById("title").innerHTML="Health GO | ";
      myLoop();
    } 
    if(i==2){
      document.getElementById("title").innerHTML="Health GO | S";
      myLoop();
    }
    if(i==3){
      document.getElementById("title").innerHTML="Health GO | St";
      myLoop();
    }
    if(i==4){
      document.getElementById("title").innerHTML="Health GO | Str";
      myLoop();
    }
    if(i==5){
      document.getElementById("title").innerHTML="Health GO | Stro";
      myLoop();
    }
    if(i==6){
      document.getElementById("title").innerHTML="Health GO | Strok";
      myLoop();
    }
    if(i==7){
        document.getElementById("title").innerHTML="Health GO | Stroke";
        myLoop();
    }
    if(i==8){
        document.getElementById("title").innerHTML="Health GO | Stroke P";
        myLoop();
    }
    if(i==9){
        document.getElementById("title").innerHTML="Health GO | Stroke Pr";
        myLoop();
    }
    if(i==10){
        document.getElementById("title").innerHTML="Health GO | Stroke Pre";
        myLoop();
    }
    if(i==11){
        document.getElementById("title").innerHTML="Health GO | Stroke Pred";
        myLoop();
    }
    if(i==12){
        document.getElementById("title").innerHTML="Health GO | Stroke Predi";
        myLoop();
    }
    if(i==13){
        document.getElementById("title").innerHTML="Health GO | Stroke Predic";
        myLoop();
    }
    if(i==14){
        document.getElementById("title").innerHTML="Health GO | Stroke Predict";
        myLoop();
    }
    if(i==15){
        document.getElementById("title").innerHTML="Health GO | Stroke Predicto";
        myLoop();
    }
    if(i==16){
        document.getElementById("title").innerHTML="Health GO | Stroke Predictor";
        myLoop();
    }
    if(i==17){
        i=0;
        myLoop();
    }
    i++; 
  }, 400)
}
myLoop();

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

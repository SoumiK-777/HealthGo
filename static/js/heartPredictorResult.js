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
      document.getElementById("title").innerHTML="Health GO | H";
      myLoop();
    }
    if(i==3){
      document.getElementById("title").innerHTML="Health GO | He";
      myLoop();
    }
    if(i==4){
      document.getElementById("title").innerHTML="Health GO | Hea";
      myLoop();
    }
    if(i==5){
      document.getElementById("title").innerHTML="Health GO | Hear";
      myLoop();
    }
    if(i==6){
      document.getElementById("title").innerHTML="Health GO | Heart";
      myLoop();
    }
    if(i==7){
        document.getElementById("title").innerHTML="Health GO | Heart P";
        myLoop();
    }
    if(i==8){
        document.getElementById("title").innerHTML="Health GO | Heart Pr";
        myLoop();
    }
    if(i==9){
        document.getElementById("title").innerHTML="Health GO | Heart Pre";
        myLoop();
    }
    if(i==10){
        document.getElementById("title").innerHTML="Health GO | Heart Pred";
        myLoop();
    }
    if(i==11){
        document.getElementById("title").innerHTML="Health GO | Heart Predi";
        myLoop();
    }
    if(i==12){
        document.getElementById("title").innerHTML="Health GO | Heart Predic";
        myLoop();
    }
    if(i==13){
        document.getElementById("title").innerHTML="Health GO | Heart Predict";
        myLoop();
    }
    if(i==14){
        document.getElementById("title").innerHTML="Health GO | Heart Predicto";
        myLoop();
    }
    if(i==15){
        document.getElementById("title").innerHTML="Health GO | Heart Predictor";
        myLoop();
    }
    if(i==16){
        document.getElementById("title").innerHTML="Health GO | Heart Predictor";
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

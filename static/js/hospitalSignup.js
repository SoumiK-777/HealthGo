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
      document.getElementById("title").innerHTML="Health GO | Ho";
      myLoop();
    }
    if(i==3){
      document.getElementById("title").innerHTML="Health GO | Hosp";
      myLoop();
    }
    if(i==4){
      document.getElementById("title").innerHTML="Health GO | Hospit";
      myLoop();
    }
    if(i==5){
      document.getElementById("title").innerHTML="Health GO | Hospital";
      myLoop();
    }
    if(i==6){
      document.getElementById("title").innerHTML="Health GO | Hospital S";
      myLoop();
    }
    if(i==7){
        document.getElementById("title").innerHTML="Health GO | Hospital Si";
        myLoop();
    }
    if(i==8){
        document.getElementById("title").innerHTML="Health GO | Hospital Sign";
        myLoop();
    }
    if(i==9){
        document.getElementById("title").innerHTML="Health GO | Hospital SignUp";
        myLoop();
    }
    if(i==10){
        document.getElementById("title").innerHTML="Health GO | Hospital SignUp";
        myLoop();
    }
    if(i==11){
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
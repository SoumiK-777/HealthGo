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
      document.getElementById("title").innerHTML="Health GO | F";
      myLoop();
    }
    if(i==3){
      document.getElementById("title").innerHTML="Health GO | FA";
      myLoop();
    }
    if(i==4){
      document.getElementById("title").innerHTML="Health GO | FAQ";
      myLoop();
    }
    if(i==5){
      document.getElementById("title").innerHTML="Health GO | FAQ'";
      myLoop();
    }
    if(i==6){
      document.getElementById("title").innerHTML="Health GO | FAQ's";
      myLoop();
    }
    if(i==7){
        document.getElementById("title").innerHTML="Health GO | FAQ's";
        myLoop();
    }
    if(i==8){
        i=0;
        myLoop();
    }
    i++; 
  }, 400)
}
myLoop();

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
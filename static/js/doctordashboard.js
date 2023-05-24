const innerform=document.querySelector('.innerform'); //showinfo
const cardshift=document.querySelector('.cardshift'); //show
const cardremove=document.querySelector('.cardremove'); 
var arrow=document.querySelector('.arrow');

arrow.addEventListener('click',shift);
function shift(){
    cardshift.classList.toggle('show')
    innerform.classList.toggle('showinfo')
    arrow.classList.toggle('arrowroate')
    cardremove.classList.toggle('remove')
}

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
      document.getElementById("title").innerHTML="Health GO | C";
      myLoop();
    }
    if(i==3){
      document.getElementById("title").innerHTML="Health GO | Co";
      myLoop();
    }
    if(i==4){
      document.getElementById("title").innerHTML="Health GO | Com";
      myLoop();
    }
    if(i==5){
      document.getElementById("title").innerHTML="Health GO | Comm";
      myLoop();
    }
    if(i==6){
      document.getElementById("title").innerHTML="Health GO | Commo";
      myLoop();
    }
    if(i==7){
        document.getElementById("title").innerHTML="Health GO | Common";
        myLoop();
    }
    if(i==8){
        document.getElementById("title").innerHTML="Health GO | Common D";
        myLoop();
    }
    if(i==9){
        document.getElementById("title").innerHTML="Health GO | Common Di";
        myLoop();
    }
    if(i==10){
        document.getElementById("title").innerHTML="Health GO | Common Dis";
        myLoop();
    }
    if(i==11){
        document.getElementById("title").innerHTML="Health GO | Common Dise";
        myLoop();
    }
    if(i==12){
        document.getElementById("title").innerHTML="Health GO | Common Disea";
        myLoop();
    }
    if(i==13){
        document.getElementById("title").innerHTML="Health GO | Common Diseas";
        myLoop();
    }
    if(i==14){
        document.getElementById("title").innerHTML="Health GO | Common Disease";
        myLoop();
    }
    if(i==15){
        document.getElementById("title").innerHTML="Health GO | Common Disease";
        myLoop();
    }
    if(i==16){
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
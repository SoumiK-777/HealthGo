var section=document.getElementById('section');
var textbanner=document.getElementById('textbanner');
var aditya=document.querySelectorAll(".scroll");

// var i=0;
// function number(){
//    setTimeout(() => {
       
//        if(i==avnumber+1){
//         //    i=0;
//            document.querySelector(".avnumber").innerHTML=`${avnumber}`;
//            return ;
//        }
//        else{
//            number();
//            document.querySelector(".avnumber").innerHTML=`${i}`;
//            i++;
//        }
       
//    }, 500);
// }

// number();
const hospitalbg=document.querySelector(".hospitalbg");
// window.addEventListener("scroll",function(){
//     var y=window.scrollY;
//     if(y>0){
//         document.querySelector(".hospitalbg").classList.add("hospitalafter");
//     }
//     else{
//         // hospitalbg.classList.remove("hospitalafter");
//     }
//   });


const hospitalbox=document.querySelector(".hospitalbox");
const bedav=document.querySelector(".bedav");
const doctoeav=document.querySelector(".doctorav");
const ambulanceav=document.querySelector(".ambulanceav");
const avnumber=document.querySelector(".avnumber").innerHTML;
 window.addEventListener("scroll",function(){
    // const tigg= window.innerHeight/5*3.8;
    // const tiggk= window.innerHeight/5*4;
    const tiggk= window.innerHeight/5*4;
    var y=window.scrollY;
    console.log(y);
    if(y>0){
        hospitalbox.classList.add("add");
        bedav.classList.add("add");
        doctoeav.classList.add("add");
        ambulanceav.classList.add("add");
        
        hospitalbg.classList.add("hospitalafter");
        
        // number();
       
    }
    else {
        hospitalbox.classList.remove("add");
        bedav.classList.remove("add");
        doctoeav.classList.remove("add");
        ambulanceav.classList.remove("add");
      
        hospitalbg.classList.remove("hospitalafter");
        // number();


    }


    // aditya.forEach(box=>{
    //     var top=box.getBoundingClientRect().top;
    //     if(top<tigg){
    //         box.classList.add("show");
    //         // textbanner.classList.remove("textbanner");
    //         textbanner.style.display="none";
    //     }
    //     else{
    //         box.classList.remove("show");
    //         textbanner.style.display="flex";
    //         textbanner.style.opacity=1;
    //         // section.style.display="flex";
    //     }
    // })
 })

var docdel=document.querySelector('.docdel');
var tablebox=document.querySelector('.tablebox');

//  alert(avnumber);
 doctoeav.addEventListener('click',avclicked);
 function avclicked(){
    docdel.classList.toggle('docdelopen');
    // docdel.classList.toggle('none');
    tablebox.classList.toggle('none')

 }


//  footer*******
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


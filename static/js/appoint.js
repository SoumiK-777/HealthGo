const banner=document.getElementsByClassName('banner')[0];
const block=document.getElementsByClassName('block');
for(var i=1;i<400;i++){
    banner.innerHTML+="<div class='block'></div>";

    block[i].style.animationDelay=`${i*0.01}s`
}


var section=document.getElementById('section');
var textbanner=document.getElementById('textbanner');
var aditya=document.querySelectorAll(".scroll");
 window.addEventListener("scroll",function(){
    const tigg= window.innerHeight/5*3.8;
    const tiggk= window.innerHeight/5*4;
    if(top<tiggk){
        section.style.display="none";



    }
    aditya.forEach(box=>{
        var top=box.getBoundingClientRect().top;
        if(top<tigg){
            box.classList.add("show");
            // textbanner.classList.remove("textbanner");
            textbanner.style.display="none";
        }
        else{
            box.classList.remove("show");
            textbanner.style.display="flex";
            textbanner.style.opacity=1;
            // section.style.display="flex";
        }
    })
 })

//   const namelist=document.querySelectorAll(".innernamelist");

//   window.addEventListener("scroll",function(){
//     const tigg= window.innerHeight/5*3.8;
//     namelist.forEach(box=>{
//         var top=box.getBoundingClientRect().top;
//         if(top<tigg){
//             box.classList.add("show1");
//         }
//         else{
//             box.classList.remove("show1");
//         }
//     })
//  })

// var aditya=document.querySelectorAll(".scrolleven");
//  window.addEventListener("scroll",function(){
//     const tigg= window.innerHeight/5*3.8;
//     aditya.forEach(box=>{
//         const top=box.getBoundingClientRect().top;
//         if(top<tigg){
//             box.classList.add("show");
//         }
//         else{
//             box.classList.remove("show");
//         }
//     })
//  })
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
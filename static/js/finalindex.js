// mouse pointer follow :-
// syntax of mouse pointer follow :-
// addEventListener("mousemove", (event) => {});
// onmousemove = (event) => {};

let circle = document.getElementById('circle');
// const onMouseMove = (e) =>{
//     circle.style.left = e.pageX + 'px';
//     circle.style.top = e.pageY + 'px';
// }
const onMouseMove = (event) => {
  const y = event.pageY;
  const x = event.pageX;
  const ref = document.querySelector('#circle');
  const scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
  const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  ref.style.left =  x - scrollLeft + 'px';
  ref.style.top = y - scrollTop + 'px';
};
document.addEventListener('mousemove', onMouseMove);
// var circle=document.getElementById("circle");
// document.addEventListener("mousemove", function(event){
//   circle.style.left=(event.pageX-window.pageXOffset)+"px";
//   circle.style.top=(event.pageY-window.pageYOffset)+"px";
// });

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
      document.getElementById("title").innerHTML="Health GO | Ho";
      myLoop();
    }
    if(i==4){
      document.getElementById("title").innerHTML="Health GO | Hom";
      myLoop();
    }
    if(i==5){
      document.getElementById("title").innerHTML="Health GO | Home";
      myLoop();
    }
    if(i==6){
      document.getElementById("title").innerHTML="Health GO";
      myLoop();
    }
    if(i==7){
        i=0;
        myLoop();
    }
    i++; 
  }, 400)
  // console.log(i);
}
myLoop();

// document.getElementById("div1").style.backgroundColor="black";




//   scroll
var aditya=document.querySelectorAll(".scroll");
// window.addEventListener("scroll",function(){
  //  const tigg= window.innerHeight/5*3.8;
   // const tiggk= window.innerHeight/5*4;
   // if(top<tiggk){
   //     section.style.display="none";



   // }
  //  aditya.forEach(box=>{
  //      var top=box.getBoundingClientRect().top;
  //      if(top<tigg){
  //          box.classList.add("show");
           // textbanner.classList.remove("textbanner");
           // textbanner.style.display="none"; 
      //  }
      //  else{
          //  box.classList.remove("show");
           // textbanner.style.display="flex";
           // textbanner.style.opacity=1;
           // section.style.display="flex";
//        }
//    })
// })



// color changing menu bar on scrolling
window.addEventListener("scroll",function(){
  var y=window.scrollY;
  const tigg= window.innerHeight/5*3.8;
  // const tiggk= window.innerHeight/5*4;
  // if(top<tiggk){
  //     section.style.display="none";



  // }
  aditya.forEach(box=>{
      var top=box.getBoundingClientRect().top;
      if(top<tigg){
          box.classList.add("show");
          // textbanner.classList.remove("textbanner");
          // textbanner.style.display="none"; 
      }
      else{
          box.classList.remove("show");
          // textbanner.style.display="flex";
          // textbanner.style.opacity=1;
          // section.style.display="flex";
      }
  })

  if(y>1){
    document.getElementById("div1").style.backgroundColor="black";
    document.getElementById("div1").style.backdropFilter="0.1";
    document.getElementById("list").style.boxShadow="none";
    document.getElementById("div1-1-2").style.boxShadow="none";
    document.getElementById("div1").style.boxShadow="0px 0px 10px black";
    document.getElementById("lia1").style.color="white";
    document.getElementById("lia2").style.color="white";
    document.getElementById("lia3").style.color="white";
    document.getElementById("lia4").style.color="white";
    document.getElementById("lia5").style.color="white";
    document.getElementById("lia6").style.color="white";
    document.getElementById("lia7").style.color="white";
    this.document.getElementById("div1").onmouseleave=function(){
      document.getElementById("div1").style.backgroundColor="black";
    }
  }
  else{
    document.getElementById("div1").style.backgroundColor="";
    document.getElementById("list").style.boxShadow="0px 0px 10px rgb(126, 124, 124)";
    document.getElementById("div1").style.boxShadow="none";
    document.getElementById("div1-1-2").style.boxShadow="0px 0px 10px rgb(126, 124, 124)";
    document.getElementById("lia1").style.color="black";
    document.getElementById("lia2").style.color="black";
    document.getElementById("lia3").style.color="black";
    document.getElementById("lia4").style.color="black";
    document.getElementById("lia5").style.color="black";
    document.getElementById("lia6").style.color="black";
    document.getElementById("lia7").style.color="black";
  }
});

document.getElementById("div1").onmouseenter=function(){
  document.getElementById("div1").style.backgroundColor="black";
  document.getElementById("list").style.boxShadow="none";
  document.getElementById("div1").style.boxShadow="0px 0px 10px black";
  document.getElementById("div1-1-2").style.boxShadow="none"; 
    document.getElementById("lia1").style.color="white";
    document.getElementById("lia2").style.color="white";
    document.getElementById("lia3").style.color="white";
    document.getElementById("lia4").style.color="white";
    document.getElementById("lia5").style.color="white";
    document.getElementById("lia6").style.color="white";
    document.getElementById("lia7").style.color="white";
};
document.getElementById("div1").onmouseleave=function(){
  document.getElementById("div1").style.backgroundColor="";
  document.getElementById("list").style.boxShadow="0px 0px 10px rgb(126, 124, 124)";
  document.getElementById("div1").style.boxShadow="none";
  document.getElementById("div1-1-2").style.boxShadow="0px 0px 10px rgb(126, 124, 124)";
    document.getElementById("lia1").style.color="black";
    document.getElementById("lia2").style.color="black";
    document.getElementById("lia3").style.color="black";
    document.getElementById("lia4").style.color="black";
    document.getElementById("lia5").style.color="black";
    document.getElementById("lia6").style.color="black";
    document.getElementById("lia7").style.color="black";
}

// hovering list items
document.getElementById("lia1").onmouseenter=function(){
  document.getElementById("lia1").style.color="crimson";
};
document.getElementById("lia1").onmouseleave=function(){
  document.getElementById("lia1").style.color="white";
};
document.getElementById("lia2").onmouseenter=function(){
  document.getElementById("lia2").style.color="crimson";
};
document.getElementById("lia2").onmouseleave=function(){
  document.getElementById("lia2").style.color="white";
};
document.getElementById("lia3").onmouseenter=function(){
  document.getElementById("lia3").style.color="crimson";
};
document.getElementById("lia3").onmouseleave=function(){
  document.getElementById("lia3").style.color="white";
};
document.getElementById("lia4").onmouseenter=function(){
  document.getElementById("lia4").style.color="crimson";
};
document.getElementById("lia4").onmouseleave=function(){
  document.getElementById("lia4").style.color="white";
};
document.getElementById("lia5").onmouseenter=function(){
  document.getElementById("lia5").style.color="crimson";
};
document.getElementById("lia5").onmouseleave=function(){
  document.getElementById("lia5").style.color="white";
};
document.getElementById("lia6").onmouseenter=function(){
  document.getElementById("lia6").style.color="crimson";
};
document.getElementById("lia6").onmouseleave=function(){
  document.getElementById("lia6").style.color="white";
};
document.getElementById("lia7").onmouseenter=function(){
  document.getElementById("lia7").style.color="crimson ";
};
document.getElementById("lia7").onmouseleave=function(){
  document.getElementById("lia7").style.color="white";
};

// onclicking list items
document.getElementById("lia1").click=function(){
  document.getElementById("lia1").style.scale="30px";
};
// document.getElementById("lia1").onmouseleave=function(){
//   document.getElementById("lia1").style.color="white";
// };


// underline list elements
document.getElementById("cont1").onmouseenter=function(){
  document.getElementById("line1").style.width=100+"%";
}

function ourApp(){

  // main
  document.getElementById("app-box").style.opacity="1";
  document.getElementById("app-box").style.marginLeft="0px";
  // document.getElementById("app-box").style.marginLeft="-680px";

  document.getElementById("sb2").style.transform="scale(0.75)";
  document.getElementById("search-box").style.backgroundColor="black";


  document.getElementById("div1").style.backgroundColor="black";
  // alert("clicked");
  document.getElementById("div1").onmouseleave=function(){
    document.getElementById("div1").style.backgroundColor="black";
  }

  window.addEventListener("scroll",function(){
    var y=window.scrollY;
    if(y>1){
      document.getElementById("div1").style.backgroundColor="black";
      // document.getElementById("div1").style.backdropFilter="0.1";
      document.getElementById("list").style.boxShadow="none";
      document.getElementById("div1-1-2").style.boxShadow="none";
      // document.getElementById("div1").style.boxShadow="0px 0px 10px black";
      document.getElementById("lia1").style.color="white";
      document.getElementById("lia2").style.color="white";
      document.getElementById("lia3").style.color="white";
      document.getElementById("lia4").style.color="white";
      document.getElementById("lia5").style.color="white";
      document.getElementById("lia6").style.color="white";
      document.getElementById("lia7").style.color="white";
    }
    else{
      document.getElementById("div1").style.backgroundColor="black";
      // document.getElementById("list").style.boxShadow="0px 0px 10px rgb(126, 124, 124)";
      document.getElementById("div1").style.boxShadow="none";
      // document.getElementById("div1-1-2").style.boxShadow="0px 0px 10px rgb(126, 124, 124)";
      document.getElementById("lia1").style.color="white";
      document.getElementById("lia2").style.color="white";
      document.getElementById("lia3").style.color="white";
      document.getElementById("lia4").style.color="white";
      document.getElementById("lia5").style.color="white";
      document.getElementById("lia6").style.color="white";
      document.getElementById("lia7").style.color="white";
      this.document.getElementById("div1-1-2").style.boxShadow="none";
      this.document.getElementById("list").style.boxShadow="none";
    }
  });
}

function closeApp(){

  // main

  document.getElementById("app-box").style.opacity="0";
  document.getElementById("app-box").style.marginLeft="-2000px";

  document.getElementById("sb2").style.transform="scale(1)";
  document.getElementById("search-box").style.backgroundColor="white";


  document.getElementById("div1").style.backgroundColor="none";
  window.addEventListener("scroll",function(){
    var y=window.scrollY;
    if(y>1){
      document.getElementById("div1").style.backgroundColor="black";
      document.getElementById("div1").style.backdropFilter="0.1";
      document.getElementById("list").style.boxShadow="none";
      document.getElementById("div1-1-2").style.boxShadow="none";
      document.getElementById("div1").style.boxShadow="0px 0px 10px black";
      document.getElementById("lia1").style.color="white";
      document.getElementById("lia2").style.color="white";
      document.getElementById("lia3").style.color="white";
      document.getElementById("lia4").style.color="white";
      document.getElementById("lia5").style.color="white";
      document.getElementById("lia6").style.color="white";
      document.getElementById("lia7").style.color="white";
    }
    else{
      document.getElementById("div1").style.backgroundColor="";
      document.getElementById("list").style.boxShadow="0px 0px 10px rgb(126, 124, 124)";
      document.getElementById("div1").style.boxShadow="none";
      document.getElementById("div1-1-2").style.boxShadow="0px 0px 10px rgb(126, 124, 124)";
      document.getElementById("lia1").style.color="black";
      document.getElementById("lia2").style.color="black";
      document.getElementById("lia3").style.color="black";
      document.getElementById("lia4").style.color="black";
      document.getElementById("lia5").style.color="black";
      document.getElementById("lia6").style.color="black";
      document.getElementById("lia7").style.color="black";
    }
  });
  
  document.getElementById("div1").onmouseenter=function(){
    document.getElementById("div1").style.backgroundColor="black";
    document.getElementById("list").style.boxShadow="none";
    document.getElementById("div1").style.boxShadow="0px 0px 10px black";
    document.getElementById("div1-1-2").style.boxShadow="none"; 
      document.getElementById("lia1").style.color="white";
      document.getElementById("lia2").style.color="white";
      document.getElementById("lia3").style.color="white";
      document.getElementById("lia4").style.color="white";
      document.getElementById("lia5").style.color="white";
      document.getElementById("lia6").style.color="white";
      document.getElementById("lia7").style.color="white";
  };
  document.getElementById("div1").onmouseleave=function(){
    document.getElementById("div1").style.backgroundColor="";
    document.getElementById("list").style.boxShadow="0px 0px 10px rgb(126, 124, 124)";
    document.getElementById("div1").style.boxShadow="none";
    document.getElementById("div1-1-2").style.boxShadow="0px 0px 10px rgb(126, 124, 124)";
      document.getElementById("lia1").style.color="black";
      document.getElementById("lia2").style.color="black";
      document.getElementById("lia3").style.color="black";
      document.getElementById("lia4").style.color="black";
      document.getElementById("lia5").style.color="black";
      document.getElementById("lia6").style.color="black";
      document.getElementById("lia7").style.color="black";
  }
}

document.getElementById("div1").onmouseenter=function(){
  alert("mouse enter");
}

////////////////////////////////////////////////////////////////////

// toggling menu bar
function toggleMenu(){
  var container=document.querySelector(".div2");
  container.classList.toggle("active");
}

//////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded",function(){
// var slide=document.getElementById("sliderone");
// var btn1=document.getElementById("btn1");
// var btn2=document.getElementById("btn2");
// var btn3=document.getElementById("btn3");
// var btn4=document.getElementById("btn4");
// var slide1=document.getElementsByTagName("span");
// var next=document.getElementById("next");
// var previous=document.getElementById("previous");
// while(i>=0){
  // var i=0;
 
// while(i>=0&& n==1 ){
  // = function(){
  //     next.addEventListener('click',()=>{
  // alert("hello");
  // while(i<=4){
  //     var h=`btn${(i+1)%4}`
  //     // if()
  //     if(h.className=="active"){
  //         i=i;break;
  //     }
  //     i++;
  // }
  //     var s1=`btn${(i+1)%4}`;
  //     var s2=`btn${(i+2)%4}`;
  //     var s3=`btn${(i+3)%4}`;
  //     var s4=`btn${(i+4)%4}`;
  //     // var s5=
  //     slide.style.transform = `translateX(-${i*100}px)`;
  //     s1.classList.add("active");
  //     s2.classList.remove("active");
  //     s3.classList.remove("active");
  //     s4.classList.remove("active");
      
      
      
      
  //     i=i%4+1;})
  

// }
// previous.onclick = function(){
//     alert("gjkh")
// }
// const image=[
//     'img/1 (1).jpg',
//      'img/1 (2).jpg',
//     'img/1 (3).jpg',
//      'img/1 (4).jpg',
   
// ]
// var i=2;
// function changeimg(){
  // document.slide.src =image[i];
// while(i<=4){

//     if(i<4){
//         alert(i);
//         var s1=`btn${(i+1)%4}`;
//             var s2=`btn${(i+2)%4}`;
//             var s3=`btn${(i+3)%4}`;
//             var s4=`btn${(i+4)%4}`;
//             // var s5=
//             slide.style.transform = `translateX(-${i*100}%)`;
//             s1.classList.add("active");
//             s2.classList.remove("active");
//             s3.classList.remove("active");
//             s4.classList.remove("active");
          

//         i++;
//         alert(i);
//     }
//     else{
//         i=0;
//     }

//     setTimeout(1000);
// }
// window.onload=changeimg;

// btn1.onclick = function(){
//     slide.style.transform = "translateX(0px)";
//     btn1.classList.add("active");
//     btn2.classList.remove("active");
//     btn3.classList.remove("active");
//     btn4.classList.remove("active");


// }
// btn2.onclick = function(){
//     // slide.style.transform = "translateX(100%)";
//     // slide.style.left= "-100%";
//     slide.style.scr=`url("img/hospital.jpg")`
//     btn2.classList.add("active");
//     btn1.classList.remove("active");
//     btn3.classList.remove("active");
//     btn4.classList.remove("active");
// }
// btn3.onclick = function(){
//     // slide.style.transform = "translateX(-200%)";
//     slide.style.transform = "left(-200%)";
//     btn3.classList.add("active");
//     btn2.classList.remove("active");
//     btn1.classList.remove("active");
//     btn4.classList.remove("active");
// }
// btn4.onclick = function(){
//     slide.style.transform = "translateX(-300%)";
//     btn4.classList.add("active");
//     btn2.classList.remove("active");
//     btn3.classList.remove("active");
//     btn1.classList.remove("active");
// }


var info =document.getElementById("info");
var itme1 =document.getElementById("itme1");
var itme2 =document.getElementById("itme2");
var itme3 =document.getElementById("itme3");
var itme4 =document.getElementById("itme4");
var itme5 =document.getElementById("itme5");
var itme6 =document.getElementById("itme6");
//.......................




// .......................
itme1.addEventListener("mouseover",function(){
  
  info.style.backgroundImage = `url("https://img.freepik.com/free-photo/empty-hospital-ward-with-heart-rate-monitor-bed-healthcare-recovery-nobody-emergency-room-with-medical-equipment-intensive-care-patient-reanimation-room-with-tools_482257-40043.jpg?size=626&ext=jpg&ga=GA1.1.433269929.1674957879&semt=ais")`;
  info.style.backgroundSize = "cover";
  

  
})
itme2.addEventListener("mouseover",function(){
  
  info.style.backgroundImage = `url("https://img.freepik.com/free-photo/empty-hospital-ward-with-heart-rate-monitor-bed-healthcare-recovery-nobody-emergency-room-with-medical-equipment-intensive-care-patient-reanimation-room-with-tools_482257-40043.jpg?size=626&ext=jpg&ga=GA1.1.433269929.1674957879&semt=ais")`;
  
  info.style.backgroundSize = "cover";
  

  
})
itme3.addEventListener("mouseover",function(){
  
  info.style.backgroundImage = `url("https://img.freepik.com/free-photo/interior-view-operating-room_1170-2254.jpg?size=626&ext=jpg&ga=GA1.1.433269929.1674957879&semt=sph")`;
  info.style.backgroundSize = "cover";
  

  
})
itme4.addEventListener("mouseover",function(){
  
  info.style.backgroundImage = `url("img/hospital2.jpg")`;
  info.style.backgroundSize = "cover";
  

  
})
itme5.addEventListener("mouseover",function(){
  
  info.style.backgroundImage = `url("img/shop.jpg")`;
  info.style.backgroundSize = "cover";
  

  
})
itme6.addEventListener("mouseover",function(){
  
  info.style.backgroundImage = `url("img/disease1.jpg")`;
  info.style.backgroundSize = "cover";
  

  
})
info.addEventListener("mouseleave",function(){
  info.style.backgroundImage = `url("img/cover4.jpg")`;
  info.style.backgroundSize = "cover";

})
})

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
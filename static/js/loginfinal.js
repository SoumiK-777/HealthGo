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
      document.getElementById("title").innerHTML="Health GO | L";
      myLoop();
    }
    if(i==3){
      document.getElementById("title").innerHTML="Health GO | Lo";
      myLoop();
    }
    if(i==4){
      document.getElementById("title").innerHTML="Health GO | Log";
      myLoop();
    }
    if(i==5){
      document.getElementById("title").innerHTML="Health GO | Logi";
      myLoop();
    }
    if(i==6){
      document.getElementById("title").innerHTML="Health GO | Login";
      myLoop();
    }
    if(i==7){
        document.getElementById("title").innerHTML="Health GO";
        myLoop();
    }
    if(i==8){
        i=0;
        myLoop();
    }
    i++; 
  }, 900)
//   console.log(i);
}
myLoop();
  
// // image
// function getMyCord(e){
//   var x=e.pageX();
//   console.log(x);
//   // var y=event.clientY();
//   // var z="x-coordinates : "+x+" y-coordinates : "+y;
//   // console.log(z);
// }

// some crazy stuff
document.getElementById("para1").onclick=function(){

    // for docters
    document.getElementById("docter-card").style.left="340px";
    document.getElementById("docter-card").style.top="200px";
    document.getElementById("docter-card").style.transform="scale(1)";
    document.getElementById("docter-card").style.opacity="1";

    // for patients
    document.getElementById("patient-card").style.left="1160px";
    document.getElementById("patient-card").style.top="200px";
    document.getElementById("patient-card").style.transform="scale(1)";
    document.getElementById("patient-card").style.opacity="1";

    // for hospitals
    // document.getElementById("hospital-card").style.top=-442+"%";
    document.getElementById("hospital-card").style.top="200px";
    document.getElementById("hospital-card").style.left="750px";
    document.getElementById("hospital-card").style.transform="scale(1)";
    document.getElementById("hospital-card").style.opacity="1";

    // para
    document.getElementById("login-head").style.backdropFilter="brightness(40%)";
    document.getElementById("p1").style.color="white";
    document.getElementById("login-head").style.boxShadow="0px 0px 5px grey";

    // para1
    document.getElementById("para1").style.fontSize="50px";
    // document.getElementById("login-head").style.top=-309.5+"%";
    document.getElementById("login-head").style.top="0px";
    document.getElementById("login-head").style.height="90px";

};

// for docters
document.getElementById("docter-card").onmouseenter=function(){
    document.getElementById("img-1").style.transform="scale(1.15)";
    document.getElementById("href1").style.color="antiquewhite";
    document.getElementById("docter-card").style.transform="scale(0.95)";

    // opacity effect
    document.getElementById("docter-card").style.filter="brightness(100%)";
    document.getElementById("patient-card").style.filter="brightness(40%)";
    document.getElementById("hospital-card").style.filter="brightness(40%)";
};
document.getElementById("docter-card").onmouseleave=function(){
    document.getElementById("img-1").style.transform="scale(1)";
    document.getElementById("href1").style.color="white";
    document.getElementById("docter-card").style.transform="scale(1)";

    // document.getElementById("image4").style.opacity="0";
    // document.getElementById("image1").style.opacity="1";
    // document.getElementById("image1").style.position="relative";
    // document.getElementById("image4").style.position="absolute";

    // opacity effect
    document.getElementById("docter-card").style.filter="brightness(90%)";
    document.getElementById("patient-card").style.filter="brightness(90%)";
    document.getElementById("hospital-card").style.filter="brightness(90%)";
};

// for patients
document.getElementById("patient-card").onmouseenter=function(){
    document.getElementById("img-2").style.transform="scale(1.15)";
    document.getElementById("href2").style.color="antiquewhite";
    document.getElementById("patient-card").style.transform="scale(0.95)";

    // opacity effect
    document.getElementById("docter-card").style.filter="brightness(40%)";
    document.getElementById("patient-card").style.filter="brightness(100%)";
    document.getElementById("hospital-card").style.filter="brightness(40%)";
};
document.getElementById("patient-card").onmouseleave=function(){
    document.getElementById("img-2").style.transform="scale(1)";
    document.getElementById("href2").style.color="white";
    document.getElementById("patient-card").style.transform="scale(1)";

    // document.getElementById("image3").style.opacity="0";
    // document.getElementById("image1").style.opacity="1";
    // document.getElementById("image1").style.position="relative";
    // document.getElementById("image3").style.position="absolute";

    // opacity effect
    document.getElementById("docter-card").style.filter="brightness(90%)";
    document.getElementById("patient-card").style.filter="brightness(90%)";
    document.getElementById("hospital-card").style.filter="brightness(90%)";
};

// for hospitals
document.getElementById("hospital-card").onmouseenter=function(){
    document.getElementById("img-3").style.transform="scale(1.15)";
    document.getElementById("href3").style.color="antiquewhite";
    document.getElementById("hospital-card").style.transform="scale(0.95)";

    // opacity effect
    document.getElementById("docter-card").style.filter="brightness(40%)";
    document.getElementById("patient-card").style.filter="brightness(40%)";
    document.getElementById("hospital-card").style.filter="brightness(100%)";
};
document.getElementById("hospital-card").onmouseleave=function(){
    document.getElementById("img-3").style.transform="scale(1)";
    document.getElementById("href3").style.color="white";
    document.getElementById("hospital-card").style.transform="scale(1)";

    // document.getElementById("image2").style.opacity="0";
    // document.getElementById("image1").style.opacity="1";
    // document.getElementById("image1").style.position="relative";
    // document.getElementById("image2").style.position="absolute";

    // opacity effect
    document.getElementById("docter-card").style.filter="brightness(90%)";
    document.getElementById("patient-card").style.filter="brightness(90%)";
    document.getElementById("hospital-card").style.filter="brightness(90%)";
};


// doc card para
document.getElementById("doc-card-para").onmouseenter=function(){
    document.getElementById("href1").innerHTML="Doctor | Login";
}
document.getElementById("doc-card-para").onmouseleave=function(){
    document.getElementById("href1").innerHTML="DOCTOR";
}

// pat-card-para
document.getElementById("pat-card-para").onmouseenter=function(){
    document.getElementById("href2").innerHTML="Patient | Login";
}
document.getElementById("pat-card-para").onmouseleave=function(){
    document.getElementById("href2").innerHTML="PATIENT";
}

// hosp-card-para
document.getElementById("hosp-card-para").onmouseenter=function(){
    document.getElementById("href3").innerHTML="Hospital | Login";
}
document.getElementById("hosp-card-para").onmouseleave=function(){
    document.getElementById("href3").innerHTML="HOSPITAL";
}

// second round of crazy stuffs :-

// for docter
document.getElementById("doc-card-para").onclick=function(){
  // document.getElementById("para1").style.fontSize="40px";
  // document.getElementById("login-head").style.height="80px";
// document.getElementById("doc-card-para").clearTimeout("doc-card-para");
// var doc = 0;                  
// function docterLoop() {         
//   let docTimerId=setTimeout(function(){  
//     if(doc==0){
//       document.getElementById("p1").innerHTML="LOGIN";
//       docterLoop();
//     }                    
//     if(doc==1){
//       document.getElementById("p1").innerHTML="LOGIN |";
//       docterLoop();
//     } 
//     if(doc==2){
//       document.getElementById("p1").innerHTML="LOGIN | D|";
//       docterLoop();
//     }
//     if(doc==3){
//       document.getElementById("p1").innerHTML="LOGIN | DO";
//       docterLoop();
//     }
//     if(doc==4){
//       document.getElementById("p1").innerHTML="LOGIN | DOC|";
//       docterLoop();
//     }
//     if(doc==5){
//       document.getElementById("p1").innerHTML="LOGIN | DOCT";
//       docterLoop();
//     }
//     if(doc==6){
//       document.getElementById("p1").innerHTML="LOGIN | DOCTE|";
//       docterLoop();
//     }
//     if(doc==7){
//         document.getElementById("p1").innerHTML="LOGIN | DOCTER";
//         docterLoop();
//     }
//     if(doc==8){
//       document.getElementById("p1").innerHTML="LOGIN | DOCTER|";
//       docterLoop();
//     }
//     if(doc==9){
//       document.getElementById("p1").innerHTML="LOGIN | DOCTER";
//       docterLoop();
//     }
//     if(doc==10){
//       document.getElementById("p1").innerHTML="LOGIN | DOCTER|";
//       docterLoop();
//     }
//     if(doc==11){
//       document.getElementById("p1").innerHTML="LOGIN | DOCTE";
//       docterLoop();
//     }
//     if(doc==12){
//       document.getElementById("p1").innerHTML="LOGIN | DOCT|";
//       docterLoop();
//     }
//     if(doc==13){
//       document.getElementById("p1").innerHTML="LOGIN | DOC";
//       docterLoop();
//     }
//     if(doc==14){
//       document.getElementById("p1").innerHTML="LOGIN | DO|";
//       docterLoop();
//     }
//     if(doc==15){
//       document.getElementById("p1").innerHTML="LOGIN | D";
//       docterLoop();
//     }
//     if(doc==16){
//       document.getElementById("p1").innerHTML="LOGIN | ";
//       docterLoop();
//     }
//     if(doc==17){
//       document.getElementById("p1").innerHTML="LOGIN | चि";
//       docterLoop();
//     }
//     if(doc==18){
//       document.getElementById("p1").innerHTML="LOGIN | चिकि|";
//       docterLoop();
//     }
//     if(doc==19){
//       document.getElementById("p1").innerHTML="LOGIN | चिकित्स";
//       docterLoop();
//     }
//     if(doc==20){
//       document.getElementById("p1").innerHTML="LOGIN | चिकित्सक|";
//       docterLoop();
//     }
//     if(doc==21){
//       document.getElementById("p1").innerHTML="LOGIN | चिकित्सक";
//       docterLoop();
//     }
//     if(doc==22){
//       document.getElementById("p1").innerHTML="LOGIN | चिकित्सक|";
//       docterLoop();
//     }
//     if(doc==23){
//       document.getElementById("p1").innerHTML="LOGIN | चिकित्स";
//       docterLoop();
//     }
//     if(doc==24){
//       document.getElementById("p1").innerHTML="LOGIN | चिकि|";
//       docterLoop();
//     }
//     if(doc==25){
//       document.getElementById("p1").innerHTML="LOGIN | चि";
//       docterLoop();
//     }
//     if(doc==26){
//       // document.getElementById("p1").fadeIn();
//       document.getElementById("p1").innerHTML="LOGIN | ";
//       docterLoop();
//     }
//     if(doc==27){
//         doc=0;
//         docterLoop();
//     }
//     console.log(doc);
//     doc++; 
//   }, 200)
// }
// docterLoop();

// auto-type :-
var typed=new Typed(".auto-type", {
  strings: [" | Doctor"," | चिकित्सक"," | ଡାକ୍ତର"," | மருத்துவர்"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
});

// further : 
document.getElementById("hospital-card").style.opacity="0";
document.getElementById("patient-card").style.opacity="0";
document.getElementById("doc-card-para").style.opacity="0";
document.getElementById("docter-card").style.height="80px";
document.getElementById("docter-card").style.width="80px";
document.getElementById("docter-card").style.top="-323.2%";
document.getElementById("docter-card").style.left="26%";
document.getElementById("docter-card").style.opacity="0";

// form opens
document.getElementById("doc-main-form").style.zIndex="0";
document.getElementById("doc-main-form").style.opacity="1";
document.getElementById("doc-main-form").style.transform="scale(1)";
};

// // for hospital :-
document.getElementById("hosp-card-para").onclick=function(){
//   document.getElementById("para1").style.fontSize="40px";
//   document.getElementById("login-head").style.height="80px";

// var hosp = 0;                  
// function hospitalLoop() {         
//   setTimeout(function(){  
//     if(hosp==0){
//       document.getElementById("p1").innerHTML="LOGIN";
//       // document.getElementById("p1").style.transition="all 2s ease-in-out";
//       hospitalLoop();
//     }                    
//     if(hosp==1){
//       document.getElementById("p1").innerHTML="LOGIN |";
//       hospitalLoop();
//     } 
//     if(hosp==2){
//       document.getElementById("p1").innerHTML="LOGIN | H|";
//       hospitalLoop();
//     }
//     if(hosp==3){
//       document.getElementById("p1").innerHTML="LOGIN | HO";
//       hospitalLoop();
//     }
//     if(hosp==4){
//       document.getElementById("p1").innerHTML="LOGIN | HOS|";
//       hospitalLoop();
//     }
//     if(hosp==5){
//       document.getElementById("p1").innerHTML="LOGIN | HOSP";
//       hospitalLoop();
//     }
//     if(hosp==6){
//       document.getElementById("p1").innerHTML="LOGIN | HOSPI|";
//       hospitalLoop();
//     }
//     if(hosp==7){
//         document.getElementById("p1").innerHTML="LOGIN | HOSPIT";
//         hospitalLoop();
//     }
//     if(hosp==8){
//       document.getElementById("p1").innerHTML="LOGIN | HOSPITA|";
//       hospitalLoop();
//     }
//     if(hosp==9){
//       document.getElementById("p1").innerHTML="LOGIN | HOSPITAL";
//       hospitalLoop();
//     }
//     if(hosp==10){
//       document.getElementById("p1").innerHTML="LOGIN | HOSPITAL|";
//       hospitalLoop();
//     }
//     if(hosp==11){
//       document.getElementById("p1").innerHTML="LOGIN | HOSPITA";
//       hospitalLoop();
//     }
//     if(hosp==12){
//       document.getElementById("p1").innerHTML="LOGIN | HOSPIT|";
//       hospitalLoop();
//     }
//     if(hosp==13){
//       document.getElementById("p1").innerHTML="LOGIN | HOSPI";
//       hospitalLoop();
//     }
//     if(hosp==14){
//       document.getElementById("p1").innerHTML="LOGIN | HOSP|";
//       hospitalLoop();
//     }
//     if(hosp==15){
//       document.getElementById("p1").innerHTML="LOGIN | HOS";
//       hospitalLoop();
//     }
//     if(hosp==16){
//       document.getElementById("p1").innerHTML="LOGIN | HO";
//       hospitalLoop();
//     }
//     if(hosp==17){
//       document.getElementById("p1").innerHTML="LOGIN | H";
//       hospitalLoop();
//     }
//     if(hosp==18){
//       document.getElementById("p1").innerHTML="LOGIN | ";
//       hospitalLoop();
//     }
//     if(hosp==19){
//       document.getElementById("p1").innerHTML="LOGIN | अ";
//       hospitalLoop();
//     }
//     if(hosp==20){
//       document.getElementById("p1").innerHTML="LOGIN | अस्प|";
//       hospitalLoop();
//     }
//     if(hosp==21){
//       document.getElementById("p1").innerHTML="LOGIN | अस्पता";
//       hospitalLoop();
//     }
//     if(hosp==22){
//       document.getElementById("p1").innerHTML="LOGIN | अस्पताल|";
//       hospitalLoop();
//     }
//     if(hosp==23){
//       document.getElementById("p1").innerHTML="LOGIN | अस्पताल";
//       hospitalLoop();
//     }
//     if(hosp==24){
//       document.getElementById("p1").innerHTML="LOGIN | अस्पता|";
//       hospitalLoop();
//     }
//     if(hosp==25){
//       document.getElementById("p1").innerHTML="LOGIN | अस्पत";
//       hospitalLoop();
//     }
//     if(hosp==26){
//       document.getElementById("p1").innerHTML="LOGIN | अस्प|";
//       hospitalLoop();
//     }
//     if(hosp==27){
//       document.getElementById("p1").innerHTML="LOGIN | अ";
//       hospitalLoop();
//     }
//     if(hosp==28){
//       document.getElementById("p1").innerHTML="LOGIN | ";
//       hospitalLoop();
//     }
//     if(hosp==29){
//         hosp=0;
//         hospitalLoop();
//     }
//     hosp++; 
//   }, 320);
// }
// hospitalLoop();

// auto-type :-
var typed=new Typed(".auto-type", {
  strings: [" | Hospital"," | अस्पताल"," | ଡାକ୍ତରଖାନା"," | மருத்துவமனை"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
});

// further :-
document.getElementById("docter-card").style.opacity="0";
document.getElementById("patient-card").style.opacity="0";
document.getElementById("hosp-card-para").style.opacity="0";
document.getElementById("hospital-card").style.height="80px";
document.getElementById("hospital-card").style.width="80px";
document.getElementById("hospital-card").style.top="-452%";
document.getElementById("hospital-card").style.left="22%";
document.getElementById("hospital-card").style.opacity="0";

// forms
// form opens
document.getElementById("hosp-main-form").style.zIndex="0";
document.getElementById("hosp-main-form").style.opacity="1";
document.getElementById("hosp-main-form").style.transform="scale(1)";

// 
};

// // for patient :-
document.getElementById("pat-card-para").onclick=function(){
//   document.getElementById("para1").style.fontSize="40px";
//   document.getElementById("login-head").style.height="80px";

// var doc = 0;                  
// function patientLoop() {         
//   setTimeout(function(){  
//     if(doc==0){
//       document.getElementById("p1").innerHTML="LOGIN";
//       // document.getElementById("p1").style.transition="all 2s ease-in-out";
//       patientLoop();
//     }                    
//     if(doc==1){
//       document.getElementById("p1").innerHTML="LOGIN |";
//       patientLoop();
//     } 
//     if(doc==2){
//       document.getElementById("p1").innerHTML="LOGIN | P|";
//       patientLoop();
//     }
//     if(doc==3){
//       document.getElementById("p1").innerHTML="LOGIN | PA";
//       patientLoop();
//     }
//     if(doc==4){
//       document.getElementById("p1").innerHTML="LOGIN | PAT|";
//       patientLoop();
//     }
//     if(doc==5){
//       document.getElementById("p1").innerHTML="LOGIN | PATI";
//       patientLoop();
//     }
//     if(doc==6){
//       document.getElementById("p1").innerHTML="LOGIN | PATIE|";
//       patientLoop();
//     }
//     if(doc==7){
//         document.getElementById("p1").innerHTML="LOGIN | PATIEN";
//         patientLoop();
//     }
//     if(doc==8){
//       document.getElementById("p1").innerHTML="LOGIN | PATIENT|";
//       patientLoop();
//     }
//     if(doc==9){
//       document.getElementById("p1").innerHTML="LOGIN | PATIENT";
//       patientLoop();
//     }
//     if(doc==10){
//       document.getElementById("p1").innerHTML="LOGIN | PATIEN|";
//       patientLoop();
//     }
//     if(doc==11){
//       document.getElementById("p1").innerHTML="LOGIN | PATIE";
//       patientLoop();
//     }
//     if(doc==12){
//       document.getElementById("p1").innerHTML="LOGIN | PATI|";
//       patientLoop();
//     }
//     if(doc==13){
//       document.getElementById("p1").innerHTML="LOGIN | PAT";
//       patientLoop();
//     }
//     if(doc==14){
//       document.getElementById("p1").innerHTML="LOGIN | PA|";
//       patientLoop();
//     }
//     if(doc==15){
//       document.getElementById("p1").innerHTML="LOGIN | P";
//       patientLoop();
//     }
//     if(doc==16){
//       document.getElementById("p1").innerHTML="LOGIN | ";
//       patientLoop();
//     }
//     if(doc==17){
//       document.getElementById("p1").innerHTML="LOGIN | म";
//       patientLoop();
//     }
//     if(doc==18){
//       document.getElementById("p1").innerHTML="LOGIN | मरी|";
//       patientLoop();
//     }
//     if(doc==19){
//       document.getElementById("p1").innerHTML="LOGIN | मरीज";
//       patientLoop();
//     }
//     if(doc==20){
//       document.getElementById("p1").innerHTML="LOGIN | मरीज़|";
//       patientLoop();
//     }
//     if(doc==21){
//       document.getElementById("p1").innerHTML="LOGIN | मरी";
//       patientLoop();
//     }
//     if(doc==22){
//       document.getElementById("p1").innerHTML="LOGIN | म|";
//       patientLoop();
//     }
//     if(doc==23){
//       document.getElementById("p1").innerHTML="LOGIN | ";
//       patientLoop();
//     }
//     if(doc==24){
//         doc=0;
//         patientLoop();
//     }
//     doc++; 
//   }, 320);
// //   console.log(i);
// }
// patientLoop();

// auto-typing:-
var typed=new Typed(".auto-type", {
  strings: [" | Patient"," | मरीज़"," | ରୋଗୀ"," | நோயாளி"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
});

// further :-
document.getElementById("docter-card").style.opacity="0";
document.getElementById("hospital-card").style.opacity="0";
document.getElementById("pat-card-para").style.opacity="0";
document.getElementById("patient-card").style.height="80px";
document.getElementById("patient-card").style.width="80px";
document.getElementById("patient-card").style.top="-387.5%";
document.getElementById("patient-card").style.left="26%";
document.getElementById("patient-card").style.opacity="0";

// forms
// form opens
document.getElementById("pat-main-form").style.zIndex="0";
document.getElementById("pat-main-form").style.opacity="1";
document.getElementById("pat-main-form").style.transform="scale(1)";
};

// pop up window for creating an account
// document.getElementById("create-acc").addEventListener("click", function(){ 
//   var newWindowContent = document.getElementById('myContent').innerHTML;
//   var newWindow = window.open("", "", "width=900,height=1000");
//   newWindow.document.write(newWindowContent);
// });

// title-bar

// hovering list items
// document.getElementById("lia1").onmouseenter=function(){
//   document.getElementById("lia1").style.color="rgb(21, 210, 115)";
// };
// document.getElementById("lia1").onmouseleave=function(){
//   document.getElementById("lia1").style.color="white";
// };
// document.getElementById("lia2").onmouseenter=function(){
//   document.getElementById("lia2").style.color="rgb(21, 210, 115)";
// };
// document.getElementById("lia2").onmouseleave=function(){
//   document.getElementById("lia2").style.color="white";
// };
// document.getElementById("lia3").onmouseenter=function(){
//   document.getElementById("lia3").style.color="rgb(21, 210, 115)";
// };
// document.getElementById("lia3").onmouseleave=function(){
//   document.getElementById("lia3").style.color="white";
// };
// document.getElementById("lia4").onmouseenter=function(){
//   document.getElementById("lia4").style.color="rgb(21, 210, 115)";
// };
// document.getElementById("lia4").onmouseleave=function(){
//   document.getElementById("lia4").style.color="white";
// };
// document.getElementById("lia5").onmouseenter=function(){
//   document.getElementById("lia5").style.color="rgb(21, 210, 115)";
// };
// document.getElementById("lia5").onmouseleave=function(){
//   document.getElementById("lia5").style.color="white";
// };
// document.getElementById("lia6").onmouseenter=function(){
//   document.getElementById("lia6").style.color="rgb(21, 210, 115)";
// };
// document.getElementById("lia6").onmouseleave=function(){
//   document.getElementById("lia6").style.color="white";
// };
// document.getElementById("lia7").onmouseenter=function(){
//   document.getElementById("lia7").style.color="rgb(21, 210, 115)";
// };
// document.getElementById("lia7").onmouseleave=function(){
//   document.getElementById("lia7").style.color="white";
// };

// // onclicking list items
// document.getElementById("lia1").click=function(){
//   document.getElementById("lia1").style.scale="30px";
// };


// // underline list elements
// document.getElementById("cont1").onmouseenter=function(){
//   document.getElementById("line1").style.width=100+"%";
// }



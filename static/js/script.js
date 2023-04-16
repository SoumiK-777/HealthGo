////////////////////////////////////////////////////////////////////

// toggling menu bar
function toggleMenu(){
    var container=document.querySelector(".div2");
    container.classList.toggle("active");
}

//////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded",function(){

var info =document.getElementById("info");
var itme1 =document.getElementById("itme1");
var itme2 =document.getElementById("itme2");
var itme3 =document.getElementById("itme3");
var itme4 =document.getElementById("itme4");
var itme5 =document.getElementById("itme5");
var itme6 =document.getElementById("itme6");

itme1.addEventListener("mouseover",function(){
    
    info.style.backgroundImage = `url("https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=600")`;
    info.style.backgroundSize = "cover";
    

    
})
itme2.addEventListener("mouseover",function(){
    
    info.style.backgroundImage = `url("https://images.unsplash.com/photo-1566669437687-7040a6926753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")`;
    
    info.style.backgroundSize = "cover";
    

    
})
itme3.addEventListener("mouseover",function(){
    
    info.style.backgroundImage = `url("https://images.unsplash.com/photo-1624004015322-a94d3a4eff39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")`;
    info.style.backgroundSize = "cover";
    

    
})
itme4.addEventListener("mouseover",function(){
    
    info.style.backgroundImage = `url("https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600")`;
    info.style.backgroundSize = "cover";
    

    
})
itme5.addEventListener("mouseover",function(){
    
    info.style.backgroundImage = `url("https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")`;
    info.style.backgroundSize = "cover";
    

    
})
itme6.addEventListener("mouseover",function(){
    
    info.style.backgroundImage = `url("https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80")`;
    info.style.backgroundSize = "cover";
    

    
})
info.addEventListener("mouseleave",function(){
    info.style.backgroundImage = `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUmkOH__lS4MOOz4obvUjFAzehSEAEMrvwMJeN0mmoH8hI6NCH")`;
    info.style.backgroundSize = "cover";

})
})






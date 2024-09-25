const his= document.getElementById("history");//button
const ca=document.getElementById("card-1");
const giv=document.getElementById("give");
const hlw =document.getElementById("info");
 his.addEventListener('click',function(){
    ca.classList.add("hidden"); 
     
    his.classList.add("bg-lime-500");
    giv.classList.remove("bg-lime-500");
    hlw.classList.remove("hidden");

 })
 giv.addEventListener('click',function(){
    ca.classList.remove("hidden"); 
     his.classList.remove("bg-lime-500");
     giv.classList.add("bg-lime-500");
     hlw.classList.add("hidden");
 })
 
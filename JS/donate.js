 const tk =document.getElementById("donate");//donate-button
tk.addEventListener("click",function(){
    const add =parseFloat(document.getElementById('amount').value);
    const donated =parseFloat(document.getElementById('noah').innerText);
    const balance =parseFloat(document.getElementById("main-balance").innerText);
    
      if(isNaN(add)||add<=0||add>balance||!Number.isInteger(add)){
        alert('Failed to add money');
        return;
    }
    else{
             my_modal_5.showModal();
                document.getElementById('amount').value='';
    } 
    const new_balance= balance-add;
    const new_donated= donated+add;
    document.getElementById('main-balance').innerText = new_balance;
    document.getElementById('noah').innerText = new_donated;
     
})

const tk1 =document.getElementById("donate1");
tk1.addEventListener("click",function(){
    const add1 =parseFloat(document.getElementById('amount1').value);
    const donated1 =parseFloat(document.getElementById('feni').innerText);
    const balance =parseFloat(document.getElementById("main-balance").innerText);
    
      if(isNaN(add1)||add1<=0||add1>balance){
        alert('Failed to add money');
        return;
    }
    else{
                my_modal_5.showModal();
                document.getElementById('amount1').value=' ';
    } 
    const new_balance= balance-add1;
    const new_donated1= donated1+add1;
    document.getElementById('main-balance').innerText = new_balance;
    document.getElementById('feni').innerText = new_donated1;
})

const tk2 =document.getElementById("donate2");
tk2.addEventListener("click",function(event){
    const add2 =parseFloat(document.getElementById('amount2').value);
    const donated2=parseFloat(document.getElementById('quota').innerText);
    const balance =parseFloat(document.getElementById("main-balance").innerText);
    
      if(isNaN(add2)||add2<=0||add2>balance){
        alert('Failed to add money');
        return;
    }
    else{
        my_modal_5.showModal();
        document.getElementById('amount2').value=' ';
    } 
    const new_balance= balance-add2;
    const new_donated2= donated2+add2;
    document.getElementById('main-balance').innerText = new_balance;
    document.getElementById('quota').innerText = new_donated2;
})


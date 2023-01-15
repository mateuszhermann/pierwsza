
function check(a){
    if(a<2){
        return false;
    }
    for(let i=2;i<a;i++){
        if(a%i===0){
            return false;
        }
    }
    return true;
}




document.querySelector("#chck").addEventListener('click',()=>{
    var val=document.getElementById("number").value;
    console.log(val);
    
    
    var status=document.getElementById("status");
    if(check(val)===true){
        console.log(check(val));
        status.innerHTML="<img src='./img/ok.png' alt='ok' style='display:inline-block'> ";
        status.style.backgroundColor="#51B503";
        status.style.width="119px";
        
        status.style.borderRadius="10px";
        status.style.margin="15px";
        status.style.paddingTop="10px";
        status.style.paddingBottom="10px";
        status.style.textAlign="center";
        
    }else{
        console.log(check(val));
        status.innerHTML="<img src='./img/nok.png' alt='nok' style='display:inline-block'> ";
        status.style.backgroundColor="#BF0000";
        status.style.width="119px";
        
        status.style.borderRadius="10px";
        status.style.margin="15px";
        status.style.paddingTop="10px";
        status.style.paddingBottom="10px";
        status.style.textAlign="center";
    }
})
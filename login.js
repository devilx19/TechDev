var form = document.getElementById("frm");
 form.onsubmit = function(){
    var name,pass;
    name = document.getElementById("name").value;
    pass = document.getElementById("pass").value;
    msg = document.getElementById("msg");
    if(name == "venom" && pass == "venom"){
        location.href = "home.html";
        return false;
    }
    else{
        msg.innerHTML = "Worng Details";
        return false;
    }
    
 }
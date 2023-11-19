var form = document.getElementById("frm");
 form.onsubmit = function(){
    var name,pass;
    name = document.getElementById("name").value;
    pass = document.getElementById("pass").value;
    btn = document.getElementById("btn");
    if(name == "devil" && pass == "devil"){
        location.href = "home.html";
        return false;
    }
    
 }
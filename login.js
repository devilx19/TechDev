var form = document.getElementById("frm");
 form.onsubmit = function(){
    var name,pass;
    name = document.getElementById("name").value;
    pass = document.getElementById("pass").value;
    if(name == "devil" && pass == "devil"){
        window.location.href = "home.html";
        window.alert("Welcome Devil");
    }
    
 }
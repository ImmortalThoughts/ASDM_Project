function loginClick() {
    
        var userId = document.getElementById("user-name").value;
        var userPass = document.getElementById("pwd").value;
        $(location).attr('href', "formula-management.html");
       
}
   var input = document.getElementById("pwd");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("emsLogin").click();
        }
    });

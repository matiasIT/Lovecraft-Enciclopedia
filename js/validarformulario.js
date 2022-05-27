var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");

function enviarFormulario(){
    if(nombre.value == "" || nombre.value == ""){
        alert("Ingresa un nombre valido.")

    }
    else if(apellido.value == null ||apellido.value == ""){
        alert("Ingresa un apellido valido.")
    }
    else if (email.value == null || email.value == ""){
        alert("Ingresa un email valido.")
    }
}

/*function mostrarMensaje(_idInput, _mensaje)
{
    var elemento = document.getElementById(_idInput);
    var span = document.createElement("span");
    span.innerHTML = _mensaje;
    elemento.parentNode.appendChild(span);
}*/
//creando span
function alerta(espacio,letras){
var span = document.createElement("span");                 
span.appendChild(letras);

var padre= espacio.parentNode;
var resulado=padre.appendChild(span);
return padre;
}


function validateForm(){
    validateOption();
    validacionPassword();
    validacionEmail();
    validateApe();
    validacionNom();
}

//validacion de nombres
function validacionNom(event){
    /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/
        var nombre = document.getElementById("name");
        var texto=document.createTextNode("Escriba su nombre");
    
    if(nombre.value=="")
    {
        alerta(nombre,texto);
    }
    else
    {
        var nombreArray = nombre.value.split("");
        var primeraLetra = nombreArray[0];
        var primeraMayuscula = primeraLetra.toUpperCase();
        var cortePalabra = false;

        for(var i=1;i<nombreArray.length;i++){
            if(cortePalabra)
            {
                primeraMayuscula += nombreArray[i].toUpperCase();
                cortePalabra = false;
            }
            else
                primeraMayuscula+=nombreArray[i];
            if(nombreArray[i] == " ")
                cortePalabra = true;
    }

       document.getElementById("name").value = primeraMayuscula;
       nombre.parentNode.removeChild(nombre.nextSibling);
    }
}

function validacionNumb(event){
    /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/
        palabra = window.event.keyCode;

        if((palabra>=65 && palabra<=90)||palabra==8||palabra==32){

        }
        else
        {
            //alert("Este campo solo permite caracteres de la A-Z");
            event.preventDefault();
        }
}



//validacion de contraseña

function validacionPassword(event){
    var password = document.getElementById("input-password");
    var texto5=document.createTextNode("La contraseña debe tener al menos 6 caracteres");
    var texto6=document.createTextNode("Contraseña incorrecta");
//El campo password debe tener al menos 6 caracteres
//El campo password no puede ser igual a "password" ó "123456" ó "098754"
        if(password.value=="")
        {
            alerta (password,texto5);
        }
        else
        {
        if(password.value==="123456" || password.value==="098754" && (password.value).length<6)
            {
                alerta (password,texto6);
            }
        password.parentNode.removeChild(password.nextSibling);
        }
}


function validateOption(event){
    var tipo= document.querySelector("select");
    var texto7=document.createTextNode("Escoja una opción")

    if(tipo.value == 0)
    {
       alerta(tipo,texto7);
    }
    else
    {
        tipo.value="urbana" || tipo.value="treking" ||tipo.value="electrica" || tipo.value="estatica" 
        
        tipo.parentNode.removeChild(tipo.nextSibling);
    }
}
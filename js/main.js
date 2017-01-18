function alerta(espacio,letras){
var span = document.createElement("span");                 
span.appendChild(letras);

var padre= espacio.parentNode;
var resulado=padre.appendChild(span);
return padre;

}

//validacion de nombres
function validacionNom(event){
    /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/
        var nombre = document.getElementById("name");
        var texto=document.createTextNode("Debe ingresar su nombre");
    
    if(nombre.value==""){
        alerta(nombre,texto);
    }else{
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


function validacionNomb(event){
    /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/
        palabra = window.event.keyCode;

        if((palabra>=65 && palabra<=90)||palabra==8||palabra==32){

        }
        else
        {
            // = "";
            //alert("Este campo solo permite caracteres de la A-Z");
            event.preventDefault();
        }

}

//validacion de apellidos

function validateApe(event){
    /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/
        var apellido = document.getElementById("lastname");
        var texto1=document.createTextNode("Ingrese su apellido");
    if(apellido.value=="")
    {
        alerta(apellido,texto1);
    }
    else 
    {
        var apellidoArray = apellido.value.split("");
        var primeraLetra = apellidoArray[0];
        var primeraMayuscula = primeraLetra.toUpperCase();
        var cortePalabra = false;

        for(var i=1;i<apellidoArray.length;i++){
            if(cortePalabra)
            {
                primeraMayuscula += apellidoArray[i].toUpperCase();
                cortePalabra = false;
            }
            else
                primeraMayuscula+=apellidoArray[i];
            if(apellidoArray[i] == " ")
                cortePalabra = true;
        }
        
        document.getElementById("lastname").value = primeraMayuscula;
        apellido.parentNode.removeChild(apellido.nextSibling);
    }
}


function validateApellido(event){
    /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/
        palabra = window.event.keyCode;

        if((palabra>=65 && palabra<=90)||palabra==8||palabra==32){

        }
        else
        {
            // = "";
            //alert("Este campo solo permite caracteres de la A-Z");
            event.preventDefault();
        }

}

//validacion de correo

function validacionEmail(event){
    var email = document.getElementById("input-email");
    var texto3=document.createTextNode("Verifique su e-mail");
    var texto4=document.createTextNode("e-mail invalido");

        if(email.value=="")
        {
            alerta (email,texto3);  
        }
    else{
        if (!/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test(email.value))
        {
            alerta (email,texto4);
        }
        email.parentNode.removeChild(email.nextSibling);
    }
    
}

//validacion de contraseña

function validacionPassword(event){
    var password = document.getElementById("input-password");
    var texto5=document.createTextNode("La contraseña debe tener al menos 6 caracteres");
    var texto6=document.createTextNode("contraseña incorrecta");
//El campo password debe tener al menos 6 caracteres
//El campo password no puede ser igual a "password" ó "123456" ó "098754"
        if(password.value=="")
        {
            alerta(password,texto5);
        }
        else
        {
        if(password.value == "123456" || password.value == "098754" && (password.value).length<6)
            {
                alerta(password,texto6);
            }
            
       password.parentNode.removeChild(password.nextSibling);
        }
}

//validacion de optiones


function validateOption(event){
    var tipo= document.querySelector("select");
    var texto7=document.createTextNode("escoja una opciop")

    if(tipo.value == 0)
    {
       alerta(tipo,texto7);
    }
    else{
        tipo.parentNode.removeChild(tipo.nextSibling);
    }
}

function validateForm(){
    validateOption();
    validacionPassword();
    validacionEmail();
    validateApe();
    validacionNom();
}


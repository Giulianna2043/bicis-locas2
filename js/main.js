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
    var email = document.getElementById("input-email").value;


        if (!/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test(email))
        {
            alert("email invalido");
        }
}

//validacion de contraseña

function validacionPassword(event){
   var password = document.getElementById("input-password").value;

    //El campo password debe tener al menos 6 caracteres
//El campo password no puede ser igual a "password" ó "123456" ó "098754"

        if(password == "123456" || password == "098754" && password.length<6)
            {
                alert("contraseña incorrecta ");
            }
}

//validacion de optiones


function validateOption(event){
    var tipo= document.querySelector("select").value;

    if(tipo == 0)
    {
       alert("escoge una option")
    }
}

function validateForm(){
    validateOption();
}


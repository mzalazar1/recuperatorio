window.onload = function() {

    var regOk = 0;
    
    var modal = document.getElementById("modal_ok")
    var span = document.getElementsByClassName("close")[0]
    var btnEviar = document.getElementById("enviar")

    btnEviar.addEventListener("click", validaTodo)

    span.onclick = function() {
        modal.style.display = "none";
        }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

//validacion nombre
var nombre = document.getElementById('name');
 
var nombreError = document.getElementById('nameError');

nombre.addEventListener('blur', validateNombre);
nombre.addEventListener('focus', clearNombreError);

function clearNombreError(e) {
    nombreError.classList.add('hiddenError');
} 

function validateNombre(e) {
    var x = nombre.value;
    if(x.length < 2) {
        nombreError.classList.remove('hiddenError');
    } else{
       regOk++;
    }
}

//validacion apellido
var apellido = document.getElementById('ape');

var apellidoError = document.getElementById('apeError');

apellido.addEventListener('blur', validateApellido);
apellido.addEventListener('focus', clearApellidoError);

function clearApellidoError(e) {
    apellidoError.classList.add('hiddenError');
}


function validateApellido(e) {
    var x = apellido.value;
    if(x.length < 2) {
        apellidoError.classList.remove('hiddenError');
    } else{
       regOk++;
    }
}

//validacion mail
var mail = document.getElementById('mail');
 
var mailError = document.getElementById('mailError');

mail.addEventListener('blur', validateMail);
mail.addEventListener('focus', clearMailError);

function clearMailError(e) {
    mailError.classList.add('hiddenError');
}


function validateMail(e) {
    var x = mail.value;
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i ;
    
    if(!emailRegex.test(x)) {
       mailError.classList.remove('hiddenError');
   } else{
       regOk++;
    }
}

//validacion repetir mail
var repitMail = document.getElementById('repEmail');
 
var errorRepMail = document.getElementById('errrepEmail');

repitMail.addEventListener('blur', validateRepMail);
errorRepMail.addEventListener('focus', clearRepMailError);

function clearRepMailError(e) {
    mailError.classList.add('hiddenError');
}


function validateRepMail(e) {
     if(mail.value != repitMail.value){
        errorRepMail.classList.remove('hiddenError');
     } else{
        regOk++;
     }
}

   //validacion contraseña
   var password = document.getElementById('pass');
 
   var passwordError = document.getElementById('passError');
   
   password.addEventListener('blur', validatePass);
   password.addEventListener('focus', clearPassError);

   function clearPassError(e) {
       passwordError.classList.add('hiddenError');
   }

   
   function validatePass(e) {
       var x = password.value;

       if(x.length < 6) {
           passwordError.classList.remove('hiddenError');
       } else {
          regOk++;
      }
  
}
   //validacion repetir contraseña
   var repiPassword = document.getElementById('repPass');
 
   var repiPasswordError = document.getElementById('passRepError');
   
   repiPassword.addEventListener('blur', validateRepiPass);
   repiPasswordError.addEventListener('focus', clearRepiPassError);

   function clearRepiPassError(e) {
    repiPasswordError.classList.add('hiddenError');
   }

   
   function validateRepiPass(e) 
   {
    if(password.value != repiPassword.value){
        repiPasswordError.classList.remove('hiddenError');
    }else{
        regOk++;
    }
   }

//verifica Ok
   function validaTodo() {
    regOk = 0
    validateNombre()
    validateApellido()
    validateMail()
    validateRepMail()
    validatePass()
    validateRepiPass()
    if (regOk == 6) {
        openModal()
    }
}

function openModal () {
    modal.style.display = "block";
}

}



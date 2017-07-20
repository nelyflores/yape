var usuario= document.getElementById("nombreusuario");
var telefono= localStorage.getItem("Telefono");
var botonvalidar=document.getElementById("validando");

var correo = document.getElementById("correo");
var clave = document.getElementById("clave");
usuario.addEventListener("change",validarnombre);
correo.addEventListener("change", validarEmail);

clave.addEventListener("change",validarclave);
var datonom= 0;
var datocorreo=0;
var total=correo.value;


function validarnombre(){

console.log(usuario.value)
  if( usuario.value.length < 4){
    alert("esta mal")


    }else{
      alert("esta bien")
      datonom=1;
      console.log(datonom)
    }
  };

  function validarEmail( ) {
  if(correo.value.length < 20){
    alert("esta mal")
  }else{
    alert("esta bien");
    datocorreo=1
  }
}


function validarclave(){
  
  
  if (clave.value.length== 6 && datonom ==1 && datocorreo==1){
    var botondesabilitado=document.getElementById("validando");
      botondesabilitado.classList.remove("disabled");
  }else{
    alert("necesitas una clave de 6 digitos")
    console.log(datonom);
    console.log(datocorreo);
  }
}

botonvalidar.addEventListener("click",enviardatosapi)
function enviardatosapi(){

  $.post("http://localhost:3000/api/createUser",{
    "phone":telefono,
    "name":usuario.value,
    "email":correo.value,
    "password":clave.value
  }).then (function (response){
   console.log(response);
  }).catch(function(error){
    console.log(error);
  });
  
  
}
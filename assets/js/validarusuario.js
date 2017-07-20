var usuario= document.getElementById("nombreusuario");
var correo = document.getElementById("correo");
var clave = document.getElementById("clave");
correo.addEventListener("change", validarEmail);
/*usuario.addEventListener("change",validarnombre);
clave.addEventListener("change",validarclave);*/
var datonom= 0;
var datocorreo=0;
var total=correo.value;
function validarEmail( ) {
  if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo.value)) ) {
    console.log(total)
    alert("mal");
  }else {
    alert("bien");
  }
}

/*function validarnombre(){
  if(usuario.length<4){

    alert("escribe tu nombre de usuario")

  }else {
    alert("correcto ")
    datonom =1;
  }
};

function validarclave(){
  var longitud=clave.length;
  console.log(longitud);
  if (longitud== 6 && datonom == 1 && datocorreo == 1){
    var botondesabilitado=document.getElementById("validando");
      botondesabilitado.classList.remove("disabled");
  }else{
    alert("necesitas una clave de 6 digitos")
    console.log(datonom);
    console.log(datocorreo);
  }
}*/

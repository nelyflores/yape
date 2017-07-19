var telefono=document.getElementById("icon_prefix");
var check=document.getElementById("test5");
console.log(telefono);
telefono.addEventListener("change",validaTelefono);
function validaTelefono(){
var valor=  telefono.value;
console.log(valor.length);
  if(!valor.length==10 && check.checked==1) {
    alert("ingresa")
  }else{
    var botondesabilitado=document.getElementById("validando");
    botondesabilitado.classList.remove("disabled");
  }

};

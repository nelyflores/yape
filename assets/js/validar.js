var telefono=document.getElementById("icon_prefix");
var check=document.getElementById("test5");
console.log(telefono);
console.log(check);
var res=0;
telefono.addEventListener("change",validaTelefono);
function validaTelefono(){
	var valor=  telefono.value;
	console.log(valor.length);
 	 if(valor.length==10 ) {
 		res=1;
 		console.log(res);
  	}else{
  		alert("agrega un número de 10 digitos")
	}
};
check.addEventListener("change",validacheckbox);
function validacheckbox(){
	if(check.checked == 1 && res==1){
		var botondesabilitado=document.getElementById("validando");
    	botondesabilitado.classList.remove("disabled");
	}else{
		alert("debes llenar los 2 campos");
	}
};



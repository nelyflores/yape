var telefono=document.getElementById("icon_prefix");
var check=document.getElementById("test5");
var botonvalidar=document.getElementById("validando");

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
 		localStorage.setItem("Telefono", valor);
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

botonvalidar.addEventListener("click",enviardatosapi)
function enviardatosapi(){

	$.post("http://localhost:3000/api/registerNumber",{
		"phone":telefono.value,
		"terms":check.value
	}).then (function (response){
		var dataclave=response.data.code;
    alert("tu codigo es : "+ response.data.code);
		console.log(response);
		console.log(dataclave)
 
    localStorage.setItem("Clave", dataclave);
	}).catch(function(error){
		console.log(error);
	});
	
	
}



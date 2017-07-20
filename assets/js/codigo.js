// validar el codigo
var telefono= localStorage.getItem("Telefono");
console.log(telefono);
var alertclave = localStorage.getItem("Clave");
console.log(alertclave);
var clavecompara = document.getElementById("clave");
clave.addEventListener("change", validarclave);
function validarclave(){
	if( clavecompara.value==alertclave){
		alert("son iguales")
		window.location.href = "vista4.html";
	}else{
		alert("hasta aqui");
	}
}

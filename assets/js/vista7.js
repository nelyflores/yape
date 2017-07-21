var passwordtarjeta = document.getElementById('clavetarjeta');
var botonregtarjeta = document.getElementById('validandotarjeta');
var telefono= localStorage.getItem("Telefono");
var numtarjeta =localStorage.getItem("NumTarjeta");
var mestarjeta =localStorage.getItem("NumMes");
var yeartarjeta =localStorage.getItem("NumAn");
passwordtarjeta.addEventListener("change",validarpassword)

function validarpassword(){
	if (passwordtarjeta .value != "") {
		alert("ya quedo")
		botonregtarjeta.classList.remove("disabled");

	}else{
		alert("pon la clave");
	}
}

botonregtarjeta.addEventListener("click",agregartarjeta)

function agregartarjeta(){
	$.post("http://localhost:3000/api/registerCard",{
		"phone":telefono,
		"cardNumber":numtarjeta,
		"cardMonth":mestarjeta,
		"cardYear":yeartarjeta,
		"cardPassword":passwordtarjeta.value
	}).then (function (response){
		
		console.log(response);
	}).catch(function(error){
		console.log(error);
	});
	location.href="vista8.html"
}
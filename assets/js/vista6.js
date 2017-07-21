var numerotarjeta= document.getElementById('tarjeta');
console.log(numerotarjeta);
var retarjeta=0;
var mes =document.getElementById('mes');
console.log(mes);
var remes=0;
var anualidad=document.getElementById('anual');
console.log(anual);
var resanula=0;
var boton = document.getElementById('validando');

numerotarjeta.addEventListener("change", validarnumerotarjeta);
function validarnumerotarjeta(){
  if(numerotarjeta.value.length == 16){
  	var extraernumero= numerotarjeta.value;
  	console.log(extraernumero);
    alert("numero correcto");
    retarjeta=1;
    localStorage.setItem("NumTarjeta", extraernumero);
  }else{
    alert("numero incorrecto");
  }
}
mes.addEventListener("change",validarmes);
function validarmes(){
	if (mes.value.length == 2 && mes.value <=12){
		var extraermes = mes.value;
		console.log(extraermes);
		alert("mes correcto");
		remes =1
		localStorage.setItem("NumMes", extraermes);

	}else{
		alert("mes no valido");
	}
}
anualidad.addEventListener("change", validaranualidad);
function validaranualidad(){
	if(anualidad.value.length == 2 && anualidad.value >=17 && anualidad.value<=24 && remes==1 && retarjeta==1){
		alert("correcto")
		boton.classList.remove("disabled");
		var extaeranualidad = anualidad.value;
		console.log(extaeranualidad);
		localStorage.setItem("NumAn", extaeranualidad);
		}else{
			alert("incorrecto")
		}
	}



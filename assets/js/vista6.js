var numerotarjeta= document.getElementById('tarjeta');
console.log(numerotarjeta);
numerotarjeta.addEventListener("change", validarnumerotarjeta);
function validarnumerotarjeta(){
  if(numerotarjeta.value.length == 16){
    alert("numero correcto")
  }else{
    alert("numero incorrecto")
  }
}

$(document).ready(cargarPagina);

function cargarPagina() {
     $('#index').load('vista5.html');
       setTimeout(function() {
           $('#index').ready(function() {
               $('#splash').remove();
               window.location.href = "vista6.html";
           });
       }, 5000);
}
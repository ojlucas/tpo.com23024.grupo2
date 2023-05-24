//variables
var precioEntrada=1000;
var descuentoEstudiante=75;
var descuentoCorporativo=10;

var nombre=document.getElementById("nombre");
var apellido=document.getElementById("apellido");
var correo=document.getElementById("correo");
var cant=document.getElementById("cant");
var categoriaTicket=document.getElementById("categoriaTicket");

var btnResumen=document.getElementById("btnResumen");
var btmContinuar=document.getElementById("btmContinuar");
//botones
btnBorrar.addEventListener("click", borrarTodo);

btnResumen.addEventListener("click", totalAPagar);
btmContinuar.addEventListener("click", totalAPagar);

//funcion verificación

function validacion() {
    if (nombre.value=="" && apellido.value=="" && correo.value=="" && ((cant.value<=0)||(isNaN(cant.value)))) {
            alert("Es necesario declarar Nombre, Apellido, Correo y Cantidad");
            nombre.focus();
            return;
          }  

    else if (nombre.value==""||nombre.value== /^\\s*$/.test(nombre)) {
        alert("El campo Nombre está incompleto");
        nombre.focus();
      return;
    }
    else if (apellido.value=="") {
        alert("El campo Apellido está incompleto");
        apellido.focus();
      return;
    }
    else if (correo.value=="") {
        alert("El campo Correo está incompleto");
        correo.focus();
      return;
    }

    const emailValido=correo=>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    }
    
        if(!emailValido(correo.value)){
            alert("El correo es inválido");
            correo.focus();
            return;
        }

    else if ((cant.value<=0)||(isNaN(cant.value))) {
        alert("La cantidad de tickets es inválida");
        cant.focus();
        return;
      }
  }


//funcion calculadora

function totalAPagar(){
    validacion()
    let precioTotalEntrada=cant.value*precioEntrada;
    if(categoriaTicket.value==0){
        precioTotalEntrada=precioTotalEntrada;
    }
    if(categoriaTicket.value==1){
        precioTotalEntrada=precioTotalEntrada-(precioTotalEntrada*descuentoCorporativo/100);
    }
    if(categoriaTicket.value==2){
        precioTotalEntrada=precioTotalEntrada-(precioTotalEntrada*descuentoEstudiante/100);
    }
    totalAPagarBox.innerHTML="Total a Pagar: $"+precioTotalEntrada;
}


//funcion borrarTodo
function borrarTodo(){
    document.getElementById("myForm").reset();
    totalAPagarBox.innerHTML="Total a Pagar: $";
  }
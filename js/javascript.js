 

function displayId(id, valor){
    document.getElementById(id).style.display=valor;    
}

function justificar(id,valor){
    document.getElementById(id).style.justifyContent=valor;
}
function displayClase(valor, clase){
    
    let coleccion = document.querySelectorAll('.'+clase);   
    for (let i = 0; i < coleccion.length; i++) {
       coleccion[i].classList.remove("aparecer");
       coleccion[i].offsetWidth;
       coleccion[i].style.display=valor;     
       coleccion[i].classList.add("aparecer"); 
    } 
}

function mostrarNotas(laclase){
	console.log('mostrarNotas ' + laclase);
    if (laclase.length == 0){        
        displayClase('block', 'centroTitularunaNoticia'); 
        displayId('vertodo', 'none');
        justificar('listadonovedades','space-evenly');
        document.getElementById('titulo').innerHTML='Novedades';        
         
	}else{
        displayClase( 'none', 'centroTitularunaNoticia');
	    displayClase('block', laclase);  
        displayId('vertodo', 'block');
        justificar('listadonovedades','start'); 
        document.getElementById('titulo').innerHTML='Novedades ' + laclase;       
	}
}


document.getElementById('slide').style.background='url(./imagenes/pexels-cottonbro-studio-8721318.jpg) no-repeat';      
 

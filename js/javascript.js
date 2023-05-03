 

function asignarDisplayId(id, valor){
    document.getElementById(id).style.display=valor;
}

function asignardisplayClase(valor, clase){
    
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
        asignardisplayClase('block', 'centroTitularunaNoticia'); 
        asignarDisplayId('vertodo', 'none');
        document.getElementById('titulo').innerHTML='Novedades';   
	}else{
        asignardisplayClase( 'none', 'centroTitularunaNoticia');
	    asignardisplayClase('block', laclase);  
        asignarDisplayId('vertodo', 'block');
        document.getElementById('titulo').innerHTML='Novedades ' + laclase;       
	}
}


document.getElementById('slide').style.background='url(./imagenes/pexels-cottonbro-studio-8721318.jpg) no-repeat';      
 

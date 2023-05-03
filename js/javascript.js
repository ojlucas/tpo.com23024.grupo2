 

 

function asignarvisibilidadClase(valor, clase){
    
    let coleccion = document.querySelectorAll('.'+clase);   
    for (let i = 0; i < coleccion.length; i++) {
       coleccion[i].classList.remove("slide-in-left");
       coleccion[i].offsetWidth;
       coleccion[i].style.display=valor;     
       coleccion[i].classList.add("slide-in-left"); 
    } 
}

function mostrarNotas(laclase){
	console.log('mostrarNotas ' + laclase);
    if (laclase.length == 0){        
        asignarvisibilidadClase('none', 'centroTitularunaNoticia');  
        document.getElementById('vertodo').style.display='none';
        document.getElementById('titulo').innerHTML='Novedades';   
	}else{
        asignarvisibilidadClase( 'none', 'centroTitularunaNoticia');
	    asignarvisibilidadClase('block', laclase);  
        document.getElementById('vertodo').style.display='block';
        document.getElementById('titulo').innerHTML=laclase;       
	}
}


document.getElementById('slide').style.background='url(./imagenes/pexels-cottonbro-studio-8721318.jpg) no-repeat';      
 

 

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
    
    var etiquetas = document.getElementById("etiquetas");
    etiquetas.scrollIntoView();
      
    if (laclase.length == 0){        
        displayClase('block', 'centroTitularunaNoticia'); 
        displayClase('block', 'titulo'); 
        displayId('vertodo', 'none');
        justificar('listadonovedades','space-evenly');
        document.getElementById('titulo').innerHTML='Novedades';        
         
	}else{
        displayClase( 'none', 'centroTitularunaNoticia');
	    displayClase('block', 'titulo');  
	    displayClase('block', laclase);  
        displayId('vertodo', 'block');
        justificar('listadonovedades','start'); 
        document.getElementById('titulo').innerHTML='Novedades ' + laclase;       
	}
}


  
function cambiarslide(x){ 
    document.getElementById('slide').classList.remove("slide-in-top");
    document.getElementById('slide').offsetWidth;
    document.getElementById('slide').classList.add("slide-in-top"); 
    document.getElementById('slide').style.background="url(" + elslide.destacadas[x].imagen + ") no-repeat";      
    document.getElementById('slide').style.backgroundSize="cover";     
    if (screen.width>900){
        document.getElementById('slide').style.backgroundPositionY="-100px"; 
    }  
    if (screen.width>1200){
        document.getElementById('slide').style.backgroundPositionY="-200px";         
    }  
    document.getElementById('slide').onclick = function(){ window.location=elslide.destacadas[x].link; } ; 
    document.getElementById('tituloslide').innerHTML="<a href='"+ elslide.destacadas[x].link  + "'>" + elslide.destacadas[x].titulo + "</a>";      
    document.getElementById('tituloslide').classList.remove("slide-in-left");
    document.getElementById('tituloslide').classList.remove("delay05");
    document.getElementById('tituloslide').offsetWidth;
    document.getElementById('tituloslide').classList.add("slide-in-left"); 
    document.getElementById('tituloslide').classList.add("delay05"); 
    //console.log('imagen ' + elslide.destacadas[x].imagen);   
}
 

  function mostrarmenu(){
    estado = document.getElementById('menu').style.display;
    if (estado == 'block') document.getElementById('menu').style.display='none';
    else  document.getElementById('menu').style.display='block';   
  }
   
   
   

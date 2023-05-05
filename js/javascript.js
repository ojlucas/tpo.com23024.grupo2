 

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
    document.getElementById('slide').style.background="url(" + elslide.destacadas[x].imagen + ") no-repeat";      
    document.getElementById('slide').style.backgroundSize="cover";      
    document.getElementById('slide').style.backgroundPositionY="-200px";      
    document.getElementById('slide').onclick = function(){ window.location=elslide.destacadas[x].link; } ; 
    document.getElementById('tituloslide').innerHTML="<a href='"+ elslide.destacadas[x].link  + "'>" + elslide.destacadas[x].titulo + "</a>";      
    //console.log('imagen ' + elslide.destacadas[x].imagen);   
}
 
  var datosslide = '{ "destacadas" : [' +
'{ "imagen":"./imagenes/fotoslide1.jpg" , "titulo":"Titulo nota 1", "link": "nota1.html" },' +
'{ "imagen":"./imagenes/fotoslide2.jpg" , "titulo":"Titulo nota 2", "link": "nota2.html" },' +
'{ "imagen":"./imagenes/fotoslide3.jpg" , "titulo":"Titulo nota 3", "link": "nota3.html" } ]}';
  const elslide = JSON.parse(datosslide);
  var x=0;
setInterval(() => {   
    x++;
    if (x>=elslide.destacadas.length) x = 0;
    cambiarslide(x);  
  }, 4000);

  cambiarslide(x);
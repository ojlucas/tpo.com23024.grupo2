 

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


  
 
  var datosslide = '{ "destacadas" : [' +
'{ "imagen":"./imagenes/fotoslide1.jpg" , "titulo":"Titulo nota 1" },' +
'{ "imagen":"./imagenes/fotoslide2.jpg" , "titulo":"Titulo nota 2" },' +
'{ "imagen":"./imagenes/fotoslide3.jpg" , "titulo":"Titulo nota 3" } ]}';
 
  const elslide = JSON.parse(datosslide);
  var x=0;
setInterval(() => {
    if (x>=elslide.destacadas.length) x = 0;
    document.getElementById('slide').style.background="url(" + elslide.destacadas[x].imagen + ") no-repeat";      
    document.getElementById('slide').style.backgroundSize="cover";      
    document.getElementById('slide').style.backgroundPositionY="-200px";      
    document.getElementById('tituloslide').innerHTML=elslide.destacadas[x].titulo;      
    console.log('imagen ' + elslide.destacadas[x].imagen + ' ' +elslide.destacadas.length);
    x++;
  }, 4000);


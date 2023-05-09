   
 /*
 API PARA NOTICIAS
 https://github.com/cyberboysumanjay/Inshorts-News-API 
 https://inshorts.deta.dev/news?category=technology
 title
 content
 imageUrl
 readMoreUrl
 url 
 */

 const LeerApi = async () => {
  try{
    const res = await fetch("https://ojlucas.github.io/tpo.com23024.grupo2/news.json");
    const datos = await res.json();
    console.log( ' respuesta noticias ');
    return datos;
  } catch(err) {
    console.log('Error LeerApi: ',err);
    return '';
  }
};
 
 function consultarNoticias() {

  let contenedor = document.getElementById("listadonovedades");
  contenedor.innerHTML = '<div align="center"><div class="lds-ring"><div></div><div></div><div></div><div></div></div><br>Cargando noticias externas, puede tardar unos segundos...</div> ';
  
  console.log( ' cargando noticias ');
  let datos = LeerApi().then(resultadoapi => {   
    contenedor.innerHTML = '';
    document.getElementById("titulo").innerHTML = resultadoapi.data.length +' NOTICIAS INTERNACIONALES';    
    for(let dato of resultadoapi.data){    
      contenedor.innerHTML += '<div class="centroTitularunaNoticia aparecer " ><div class="miniaturaimagenNota">' +
        '<a href="' + dato.readMoreUrl + '" target="_blank"><img src="'+ dato.imageUrl + '"></a></div>' +
        '<div class="tituloNota">' + dato.title + '</div>' +
        '<div class="resumenNota">' + dato.content.substr(0, 180) + '...</div>' +
        '<div class="leermas"><a href="' + dato.readMoreUrl + '" target="_blank">Leer m&aacute;s</a></div>' + 
        '</div>';
    }

  }).catch(err =>  console.error("Error: " + err.message));
 
      
}

consultarNoticias();

   
 /**https://github.com/cyberboysumanjay/Inshorts-News-API 
      //content
      //imageUrl
      //readMoreUrl
      //url 
 */
 
 function consultarNoticias() {

    let contenedor = document.getElementById("listadonovedades");
    contenedor.innerHTML = '<div align="center"><div class="lds-ring"><div></div><div></div><div></div><div></div></div><br>Cargando noticias externas, puede tardar unos segundos...</div> ';
    
fetch('https://inshorts.deta.dev/news?category=technology')
  .then(response => {
    if (response.ok)
      return response.text();
    else
      throw new Error(response.status);
  })
  .then(data => {
    console.log( ' respuesta noticias ');
    const resultadoapi = JSON.parse(data);
    contenedor.innerHTML = '';
    document.getElementById("titulo").innerHTML = resultadoapi.data.length +' NOTICIAS INTERNACIONALES';
    for (x=0;x<=resultadoapi.data.length;x++){      
      contenedor.innerHTML += '<div class="centroTitularunaNoticia aparecer " ><div class="miniaturaimagenNota">' +
        '<a href="' + resultadoapi.data[x].readMoreUrl + '" target="_blank"><img src="'+ resultadoapi.data[x].imageUrl + '"></a></div>' +
        '<div class="tituloNota">' + resultadoapi.data[x].title + '</div>' +
        '<div class="resumenNota">' + resultadoapi.data[x].content.substr(0, 180) + '...</div>' +
        '<div class="leermas"><a href="' + resultadoapi.data[x].readMoreUrl + '" target="_blank">Leer m&aacute;s</a></div>' + 
    '</div>';
    }
  })
  .catch(err => {
    console.error("ERROR: ", err.message)    
  }); 
}
console.log( ' cargando noticias ');
consultarNoticias();

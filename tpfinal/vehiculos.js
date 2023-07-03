 

function cerrarModal(){  
   bootstrap.Modal.getOrCreateInstance(document.getElementById('staticBackdrop')).hide()
 
}

 

 
const { createApp } = Vue
createApp({
    delimiters: ['[[', ']]'],
    data() {
        return {
            vehiculos: [],
            errores : [],
            url: 'https://ojlucas.pythonanywhere.com/listavehiculos', 
            error: false,
            cargando: true,
            resultado: false,
            autorizado: 0,
            /*atributos para el guardar los valores del formulario */
            id: 0,
            patente: "",
            tipovehiculo: 0,
            nombrevecino: "",
            idvehiculo:"",
            titulomodal:"",

        }
    },
    methods: {
        fetchData(url) {
           
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.vehiculos = data;
                    this.cargando = false
                    this.resultado = false
                    
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                    this.resultado = false
                })
        },
        editar(id){   
           
            if (id > 0){
                this.titulomodal='Editar vehiculo';
                fetch('https://ojlucas.pythonanywhere.com/vehiculos/' + id)
                    .then(response => response.json())
                    .then(data => {                  
                        this.id = data.id                 
                        this.idvehiculo = data.id;
                        this.patente = data.patente;
                        this.tipovehiculo = data.tipovehiculo
                        this.nombrevecino = data.nombrevecino
                        console.log('id vehiculo : ' + id);
                    })
                    .catch(err => {
                        console.error(err);
                        this.error = true
                    })
            }else{
                this.titulomodal='Agregar vehiculo';
                this.id = 0                
                this.idvehiculo = 0;
                this.patente = '';
                this.tipovehiculo = 0
                this.nombrevecino = ''
            }         
           
        },
        editar_grabar() {
            var ref = this
            let unvehiculo = {
                patente: this.patente,
                tipovehiculo: this.tipovehiculo,
                nombrevecino: this.nombrevecino
            }
            if (this.id > 0){ 
                 /* Actualizo */
                metodo = 'PUT';   
                urlpost = 'https://ojlucas.pythonanywhere.com/vehiculos/' + this.id;                                      
            }else{   
                /* agrego nuevo */
                metodo = 'POST';     
                urlpost= 'https://ojlucas.pythonanywhere.com/listavehiculos';                                     
            }
            var options = {
                body: JSON.stringify(unvehiculo),
                method: metodo,
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            } 
            fetch(urlpost, options)
                    .then(function () {
                        cerrarModal()
                        ref.fetchData(ref.url);                         
                        alert("Vehiculo guardado");
                    })
                    .catch(err => {
                        console.error(err);
                        alert("Error al guardar")
                    })
        },
        buscar() {
            this.errores = [];
            patente = this.unapatente
            if (patente === undefined) patente = ''
            console.log('busco ' + patente);            
            if (patente.length > 3){                
                fetch('https://ojlucas.pythonanywhere.com/buscar/' + patente)
                    .then(response => response.json())
                    .then(data => {
                        if (data.id === undefined){
                            console.log('no se encuentra ' + patente);
                            this.patente = patente;
                            this.autorizado=0
                            this.resultado = true
                        }else{
                            this.id=data.id
                            this.patente = data.patente;
                            this.tipovehiculo=data.tipovehiculo
                            this.nombrevecino=data.nombrevecino
                            this.cargando = false
                            this.resultado = true
                            this.autorizado=1
                            console.log('se encuentra ' + this.patente);
                        }                        
                    })
                    .catch(err => {
                        console.error(err);
                        this.error = true
                        this.resultado = false
                    })
            }else{            
                this.errores.push("Ingrese la patente");
                this.resultado = true
                this.autorizado=2
            }
        },
        eliminar(vehiculo) {
            if (confirm("Eliminar el vehiculo") == true) {
                console.log('elimino')
                const url = this.url + '/' + vehiculo;
                var options = {
                    method: 'DELETE',
                }
                ref = this
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        ref.fetchData(ref.url)
                    })
            }
        } 
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')
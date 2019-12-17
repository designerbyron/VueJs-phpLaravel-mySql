var app = new Vue({
    el:'#app',
    data:{
        lista:[
            {nombre: 'Juan carlos', promedio:'10', estado: false},
            {nombre: 'Corea Andres', promedio:'17', estado: true},
            {nombre: 'Francisco Fajardo', promedio:'18', estado: true}
        ],
        nombre:'',
        promedio:''
    },
    methods: {
        agregarNota: function(){
            estadoA=false;
            if(this.promedio>=12.5){
                estadoA=true;
            }
            if(this.nombre!="" && this.promedio!=""){
                this.lista.push({
                    nombre:this.nombre, promedio: this.promedio, estado:estadoA
                });
                this.nombre="";
                this.promedio="";
            }else{
                alert("Agrega los datos correctamente");
            }
        }
    },
})
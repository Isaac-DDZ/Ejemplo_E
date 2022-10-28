class misobjetos {
    objetopaz = {
        edad:0,
        fecha_de_nacimiento:0,
        identificacion:"", 
        nombre:"", 
        estado:"",
        actividad:"",
        juego:"",
        miedad:function(fecha_de_nacimiento){
            var añosedad=2022-fecha_de_nacimiento;
            return añosedad;
        }
    };
    
    datos(identificacion,nombre,estado,actividad,juego,fecha_de_nacimiento){
        
        this.objetopaz.fecha_de=fecha_de_nacimiento;
        this.objetopaz.identifi=identificacion;
        this.objetopaz.nomb=nombre;
        this.objetopaz.esta=estado;
        this.objetopaz.activi=actividad;
        this.objetopaz.jue=juego;

        alert(this.objetopaz.fecha_de);
    };

    nacm(fecha_de_nacimiento){
        var blue = instmisobjetos.objetopaz.miedad(fecha_de_nacimiento);
        document.getElementById('parrafo').innerHTML = blue;
    }
};
var instmisobjetos = new misobjetos();

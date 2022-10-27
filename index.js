class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return console.log `El nombre del usuario es ${this.name} y su apellido es ${this.apellido}`
    }

    anadirMascotas (){
        
    }

    obtenerLibros(){
        console.log(`Lista de libros: ${this.libros.obtenerLibros}`)
    }


    // agregarLibro(nombreLibro){
    //     this.libros.push(nombreLibro)
    // }
    // listarLibros(){
    //     return this.libros.map()
    // }

    // agregarMascotas(nombreMascota){
    //     this.mascotas.push(nombreMascota)
    // }


}

// let usuario = new Usuario('','','','')





















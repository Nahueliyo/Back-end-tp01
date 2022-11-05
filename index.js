let libros =[
    {libro: "El señor de los anillos", autor: "J.R.R Tolkien"},
    {libro: "It", autor: "Stephen King"},
    {libro: "Juego de Tronos", autor: "George R.R Martin"}
]

// let libroInfo = libros.map(function(libros)){
//     return `${this.libro} ${this.autor}`
// }

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
        return `${this.libro} ${this.autor}`
    }


     agregarLibro  (){
        this.libros.push[{libro: "Harry Potter", autor: "J k Rowling"}]
     }

     
    agregarMascotas(nombreMascota){
         this.mascotas.push(nombreMascota)
     }


}
console.log(Usuario)






















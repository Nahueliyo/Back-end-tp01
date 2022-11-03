let libros =[
    {libro: "El señor de los anillos", autor: "J.R.R Tolkien"},
    {libro: "It", autor: "Stephen King"},
    {libro: "Juego de Tronos", autor: "George R.R Martin"}
]

let libroInfo = libros.map(function(libros)){
    return `${element.libro} ${element.autor}` 
}

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


     agregarLibro  (){
        this.libros.push[{libro: "Harry Potter", autor: "J k Rowling"}]
     }

     
    // listarLibros(){
    //     return this.libros.map()
    // }

    agregarMascotas(nombreMascota){
         this.mascotas.push(nombreMascota)
     }


}
console.log(Usuario)






















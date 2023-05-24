 const libros = [
    { id: 0, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico", img: "/img/portada11.jpg", precio: 20.99, stock: 10 },
    { id: 1, titulo: "El código Da Vinci", autor: "Dan Brown", genero: "Thriller", img: "/img/portada22.jpg", precio: 21.99, stock: 4 },
    { id: 2, titulo: "La ciudad y los perros", autor: "Mario Vargas Llosa", genero: "Novela", img: "/img/portada11.jpg", precio: 15.99, stock: 7 },
    { id: 3, titulo: "La casa de los espíritus", autor: "Isabel Allende", genero: "Realismo mágico", img: "/img/portada22.jpg", precio: 22.99, stock: 3 },
    { id: 4, titulo: "Crimen y castigo", autor: "Fiodor Dostoievski", genero: "Novela", img: "/img/portada11.jpg", precio: 12.99, stock: 8 },
    { id: 5, titulo: "El nombre de la rosa", autor: "Umberto Eco", genero: "Novela histórica", img: "/img/portada22.jpg", precio: 19.99, stock: 6 },
    { id: 6, titulo: "La chica del dragon tatuado", autor: "Stieg Larsson", genero: "Thriller", img: "/img/portada11.jpg", precio: 16.99, stock: 2 },
    { id: 7, titulo: "El amor en los tiempos del cólera", autor: "Gabriel García Márquez", genero: "Realismo mágico", img: "/img/portada22.jpg", precio: 18.99, stock: 5 }
]

export default libros

export const getLibros = () =>{
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(libros)
        },1000)
    }
)}

export const getLibrosById = (libroId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(libros.find(libros => libros.id === libroId))
        }, 1000)
    })
}
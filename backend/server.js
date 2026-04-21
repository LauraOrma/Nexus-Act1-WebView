const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const libros = [
    {
        id: 1,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        precio: 24.99,
        imagen: "/img/book-2.jpg"
    },
    {
        id: 2,
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        precio: 24.99,
        imagen: "/img/book-3.jpg"
    },
    {
        id: 5,
        titulo: "1984",
        autor: "George Orwell",
        precio: 16.50,
        imagen: "/img/book-6.jpg"
    },
    {
        id: 6,
        titulo: "Drácula",
        autor: "Bram Stoker",
        precio: 21.75,
        imagen: "/img/book-7.jpg"
    },
    {
        id: 7,
        titulo: "La mujer de arriba",
        autor: "Freida McFadden",
        precio: 8.95,
        imagen: "/img/book-8.jpg"
    },
    {
        id: 8,
        titulo: "El último secreto",
        autor: "Dan Brown",
        precio: 30.99,
        imagen: "/img/book-5.jpg"
    }
];
// Lista de libros
app.get('/libros', (req, res) => {
    res.json(libros);
});

// Libro individual
app.get('/libros/:id', (req, res) => {
    const libro = libros.find(l => l.id == req.params.id);
    res.json(libro);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
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
        imagen: "/img/book-2.jpg",
        estrellas: 5,
        descripcion_corta: "La historia mágica de la familia Buendía a lo largo de varias generaciones.",
        descripcion_larga: "Cien años de soledad narra la historia de la familia Buendía en el mítico pueblo de Macondo. A través de generaciones, Gabriel García Márquez mezcla lo real y lo fantástico en una obra clave del realismo mágico, explorando temas como el amor, la soledad, el destino y el paso del tiempo."
    },
    {
        id: 2,
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        precio: 24.99,
        imagen: "/img/book-3.jpg",
        estrellas: 5,
        descripcion_corta: "Un joven descubre un libro que cambiará su vida en una Barcelona llena de secretos.",
        descripcion_larga: "Ambientada en la Barcelona de posguerra, la novela sigue a Daniel Sempere, quien encuentra un libro olvidado que le lleva a investigar la misteriosa vida de su autor. Entre intrigas, romance y misterio, la historia rinde homenaje al poder de los libros y la memoria."
    },
    {
        id: 3,
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        precio: 24.99,
        imagen: "/img/book-1.jpg",
        estrellas: 5,
        descripcion_corta: "Una historia de amor, orgullo y prejuicios en la Inglaterra del siglo XIX.",
        descripcion_larga: "La novela sigue la relación entre Elizabeth Bennet y el enigmático señor Darcy. A través de malentendidos, diferencias sociales y crecimiento personal, Jane Austen construye una crítica elegante a la sociedad de su época, con diálogos brillantes y personajes inolvidables."
    },
    {
        id: 4,
        titulo: "La casa de los espíritus",
        autor: "Isabel Allende",
        precio: 24.99,
        imagen: "/img/book-4.jpg",
        estrellas: 4,
        descripcion_corta: "Una saga familiar llena de pasión, política y elementos sobrenaturales.",
        descripcion_larga: "Isabel Allende relata la vida de la familia Trueba a lo largo de varias generaciones, entrelazando historia personal y política en un país latinoamericano ficticio. La novela combina realismo mágico con una profunda exploración de las emociones humanas y los cambios sociales."
    },
    {
        id: 5,
        titulo: "1984",
        autor: "George Orwell",
        precio: 16.50,
        imagen: "/img/book-6.jpg",
        estrellas: 5,
        descripcion_corta: "Una distopía sobre un mundo controlado por un régimen totalitario.",
        descripcion_larga: "En una sociedad vigilada por el Gran Hermano, Winston Smith lucha por mantener su libertad y pensamiento crítico. George Orwell presenta una crítica inquietante sobre el poder, la manipulación y la pérdida de la individualidad que sigue siendo relevante hoy en día."
    },
    {
        id: 6,
        titulo: "Drácula",
        autor: "Bram Stoker",
        precio: 21.75,
        imagen: "/img/book-7.jpg",
        estrellas: 4,
        descripcion_corta: "El clásico relato del vampiro más famoso de la literatura.",
        descripcion_larga: "A través de cartas y diarios, la historia sigue al conde Drácula y su intento de expandir su influencia desde Transilvania hasta Inglaterra. Una obra fundamental del terror gótico que explora el miedo, la inmortalidad y lo desconocido."
    },
    {
        id: 7,
        titulo: "La mujer de arriba",
        autor: "Freida McFadden",
        precio: 8.95,
        imagen: "/img/book-8.jpg",
        estrellas: 3,
        descripcion_corta: "Un thriller psicológico lleno de tensión y secretos inquietantes.",
        descripcion_larga: "Una mujer comienza a sospechar de su vecina del piso de arriba, lo que desencadena una serie de eventos cada vez más perturbadores. Freida McFadden construye un thriller adictivo lleno de giros inesperados que mantienen al lector en constante tensión."
    },
    {
        id: 8,
        titulo: "El último secreto",
        autor: "Dan Brown",
        precio: 30.99,
        imagen: "/img/book-5.jpg",
        estrellas: 4,
        descripcion_corta: "Un misterio lleno de enigmas, ciencia y conspiraciones.",
        descripcion_larga: "En esta novela, Dan Brown mezcla historia, ciencia y símbolos ocultos para construir una trama llena de suspense. A medida que el protagonista desentraña secretos antiguos, se enfrenta a peligros inesperados en una carrera contra el tiempo."
    }
]

app.get('/libros', (req, res) => {
    res.json(libros);
});

app.get('/libros/:id', (req, res) => {
    const libro = libros.find(l => l.id == req.params.id);
    res.json(libro);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
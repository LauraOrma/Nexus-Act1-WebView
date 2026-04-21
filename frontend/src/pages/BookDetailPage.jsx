import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import librosData from '../data/libros.json';
import Header from '../components/Header';
import BookCard from "../components/BookCard.jsx";
import Footer from "../components/Footer.jsx";
import BreadCrumbs from "../components/BreadCrumbs.jsx";

function BookDetailPage() {
    const {id} = useParams();

    const libros = librosData;

    const libro = libros.find(l => l.id === Number(id));

    const recomendados = libros
        .filter(l => l.id !== Number(id))
        .slice(0, 2);

    if (!libro) return <p>Libro no encontrado</p>;
    if (!libro) return <p>Cargando...</p>;

    return (<>
        <Header/>

        <main className="book-page">
            <BreadCrumbs
                items={[
                    {label: "Inicio", to: "/"},
                    {label: "Catálogo", to: "/catalogo"},
                    {label: libro.titulo, active: true}
                ]}
            />
            {/* Detalle */}
            <section className="container" aria-label="Información sobre el libro">
                <div className="detailBook__layout">

                    <div className="detailBook__media">
                        <img
                            className="detailBook__image"
                            src={libro.imagen}
                            alt={libro.titulo}
                        />
                    </div>

                    <div className="detailBook__content">
                        <div className="detailBook__info">
                            <h1 className="detailBook__title">{libro.titulo}</h1>
                            <span className="detailBook__author">{libro.autor}</span>
                            <span className="detailBook__category">Ficción</span>
                            <span className="detailBook__price">{libro.precio}$</span>
                        </div>

                        <h2>Formatos disponibles</h2>
                        <ul className="detailBook__grpFormat">
                            <li className="detailBook__itemFormat">
                                <button className="btn__secondary">Ebook</button>
                            </li>
                            <li className="detailBook__itemFormat">
                                <button className="btn__secondary btn__secondary--active">
                                    Tapa dura
                                </button>
                            </li>
                            <li className="detailBook__itemFormat">
                                <button className="btn__secondary">Tapa blanda</button>
                            </li>
                        </ul>

                        <button className="btn__primary btn__primary--price">
                            Añadir al carrito <span>{libro.precio}$</span>
                        </button>
                    </div>

                    <div className="detailBook__more">
                        <h2>Ficha técnica</h2>
                        <div className="detailBook__technical">
                            <div className="detailBook__grp">
                                <div className="technical__item detailBook__rating">
                                    <p>Reseñas: <span>5 ⭐</span></p>
                                </div>
                                <div className="technical__item detailBook__pages">
                                    <p>Número de páginas: <span>350</span></p>
                                </div>
                                <div className="technical__item detailBook__language">
                                    <p>Idioma: <span>Español</span></p>
                                </div>
                            </div>
                        </div>

                        <h2>Sinopsis</h2>
                        <p className="detailBook__synopsis">
                            Este es un libro increíble lleno de historia y emoción...
                        </p>
                    </div>

                </div>
            </section>

            <section className="container__catalog">
                <div className="container">
                    <h2>Podría interesarte</h2>
                    <section className="catalog__books">
                        {recomendados.map(libro => (<BookCard key={libro.id} libro={libro}/>))}
                    </section>
                </div>
            </section>

        </main>
        <Footer/>
    </>);
}

export default BookDetailPage;
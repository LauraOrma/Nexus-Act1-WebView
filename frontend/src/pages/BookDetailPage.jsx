import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import librosData from '../data/libros.json';
import Header from '../components/Header';
import BookCard from "../components/BookCard.jsx";
import Footer from "../components/Footer.jsx";
import BreadCrumbs from "../components/BreadCrumbs.jsx";
import "./BookDetailPage.css";

function BookDetailPage() {
    const {id} = useParams();
    const [libro, setLibro] = useState(null);
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        fetch(`https://nexus-act1-webview.onrender.com/libros/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log("LIBRO:", data);
                setLibro(data);
            });
    }, [id]);

    useEffect(() => {
        fetch('https://nexus-act1-webview.onrender.com/libros')
            .then(res => res.json())
            .then(data => {
                console.log("LIBROS:", data);
                setLibros(data);
            });
    }, []);

    const recomendados = libros
        .filter(l => l.id !== Number(id))
        .slice(0, 4);

    if (!libro) return <span>Cargando información</span>;
    console.log(libro);
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
            <section className="container detailsBookPage" aria-label="Información sobre el libro">
                <div className="detailBook__layout">

                    <div className="detailBook__media">
                        <img
                            className="detailBook__image"
                            src={`https://nexus-act1-web-view.vercel.app${libro.imagen}`}
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
                                    <p>Reseñas: <span>5.0</span></p>
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
                            {libro.descripcion_larga}
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
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import BookCard from '../components/BookCard';
import Footer from "../components/Footer.jsx";

function CatalogPage() {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/libros')
            .then(res => res.json())
            .then(data => setLibros(data));
    }, []);

    return (
        <>
            <Header/>

            <main className="book-page">

                <section className="container__catalog">

                    {/* Breadcrumbs */}
                    <ul className="container breadcrumbs">
                        <li className="breadcrumbs__item">
                            <Link to="/">
                                <span>Inicio</span>
                            </Link>
                        </li>
                        <li className="breadcrumbs__item breadcrumbs__item--active">
                            <span>Catálogo</span>
                        </li>
                    </ul>

                    <div className="container">

                        <div className="catalog__title">
                            <div className="title__titles">
                                <h1>Nuestro catálogo</h1>
                            </div>
                        </div>

                        {/* LISTA DINÁMICA */}
                        <div className="catalog__books">
                            {libros.map(libro => (
                                <BookCard key={libro.id} libro={libro}/>
                            ))}
                        </div>

                    </div>
                </section>

            </main>
            <Footer/>
        </>
    );
}

export default CatalogPage;
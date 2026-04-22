import {useEffect, useState} from 'react';
import librosData from '../data/libros.json';
import Header from '../components/Header';
import BookCard from '../components/BookCard';
import Footer from "../components/Footer.jsx";
import Breadcrumbs from "../components/BreadCrumbs.jsx";
import "./CatalogPage.css"

function CatalogPage() {
    const [libros, setLibros] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3000/libros')
    //         .then(res => res.json())
    //         .then(data => setLibros(data));
    // }, []);

    useEffect(() => {
        setLibros(librosData);
    }, []);

    return (
        <>
            <Header/>
            <main className="book-page">
                <section className="container__catalog">
                    {/* Breadcrumbs */}
                    <Breadcrumbs
                        items={[
                            {label: "Inicio", to: "/"},
                            {label: "Catálogo", active: true}
                        ]}
                    />
                    <div className="container">

                        <div className="catalog__title">
                            <div className="title__titles">
                                <h1>Nuestro catálogo</h1>
                            </div>
                        </div>
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
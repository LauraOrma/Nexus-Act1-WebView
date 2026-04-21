import { useState, useEffect } from 'react';
import librosData from '../data/libros.json';
import Header from '../components/Header';
import BookCard from '../components/BookCard';
import Footer from "../components/Footer.jsx";

function Home() {
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
        <div className="wrapper">

            <div className="hero">
                <Header />
                <section className="hero-tagline">
                    <h1>¡Bienvenidos a Librería Nexus!</h1>
                    <a href="#" className="btn">Ver todos los libros</a>
                </section>
            </div>

            <section className="container__catalog">
                <div className="container">
                    <h2>Los más vendidos</h2>

                    <div className="catalog__books">
                        {libros.map(libro => (
                            <BookCard key={libro.id} libro={libro} />
                        ))}
                    </div>

                </div>
            </section>

            <Footer/>

        </div>
    );
}

export default Home;
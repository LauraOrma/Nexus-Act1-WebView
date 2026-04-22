import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import librosData from '../data/libros.json';
import Header from '../components/Header';
import BookCard from '../components/BookCard';
import Footer from "../components/Footer.jsx";
import "./Home.css"

function Home() {
    const [libros, setLibros] = useState([]);
    const libroDestacado = libros.find(
        libro => libro.titulo === "Cien años de soledad"
    );

    useEffect(() => {
        fetch('https://nexus-act1-webview.onrender.com/libros')
            .then(res => res.json())
            .then(data => setLibros(data));
    }, []);


    return (
        <div className="wrapper">

            <div className="hero">
                <Header/>
                <section className="hero-tagline">
                    <h1>¡Bienvenidos a Librería Nexus!</h1>
                    <Link to="/catalogo" className="btn">
                        Ver todos los libros
                    </Link>
                </section>
            </div>

            <section className="container__catalog">
                <div className="container">
                    <h2>Los más vendidos</h2>

                    <div className="catalog__books">
                        {libros.map(libro => (
                            <BookCard key={libro.id} libro={libro}/>
                        ))}
                    </div>

                </div>
            </section>

            <section className="container">
                <div className="container__monthBook">
                    <div className="catalog__title">
                        <div className="title__titles">
                            <h2>Nuestro club de lectura</h2>
                        </div>
                    </div>
                    <div className="monthbook__layout">
                        {libroDestacado && <BookCard libro={libroDestacado}/>}
                        <div className="monthBook__info">
                            <h4>¿Te apetece leer acompañado?</h4>
                            <p>
                                En nuestro club de lectura elegimos cada mes un libro para que lo disfrutemos juntos,
                                a nuestro ritmo y sin presiones. Solo necesitas ganas de leer y curiosidad por descubrir
                                nuevas historias.
                            </p>
                            <h5>Ficha técnica</h5>
                            <div className="detailBook__technical">
                                <div className="detailBook__grp">
                                    <div className="technical__item detailBook__rating">
                                        <p>Reseñas: <span>5 <i className="fa-solid fa-star info__icon"></i></span></p>
                                    </div>
                                    <div className="technical__item detailBook__pages">
                                        <p>Número de páginas: <span>400</span></p>
                                    </div>
                                    <div className="technical__item detailBook__language">
                                        <p>Idioma: <span>Español</span></p>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Este mes hemos elegido <strong>Cien años de soledad</strong>, un clásico inolvidable
                                lleno
                                de magia, memoria y familias que se cruzan una y otra vez. Iremos comentando los
                                capítulos,
                                compartiendo teorías y frases favoritas, y viendo cómo cada persona vive la historia de
                                forma distinta.
                            </p>
                            <p>
                                Puedes unirte cuando quieras: compra el libro, léelo como te venga mejor y vuelve para
                                comentar.
                                La idea es sentir que no lees solo, sino acompañado de otras personas que también se
                                emocionan,
                                se sorprenden y se enganchan página a página.
                            </p>
                            <a className="btn__secondary btn__secondary--format" href="#">Únete al club</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>

        </div>
    );
}

export default Home;
import {Link} from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <>
            <footer>
                <div className="container footer-container">
                    <div className="footer-column">
                        <div className="logo">
                            <img src="/img/book.svg" alt="" height="32"/>
                            <span>Librería Nexus</span>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h5>Enlaces rápidos</h5>
                        <ul>
                            <li><Link to="/catalogo">Catálogo de Libros</Link></li>
                            <li><span>Sobre nosotros</span></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h5>Horario</h5>
                        <p>Lunes a viernes: 7:00 - 22:00</p>
                        <p>Sábado: 8:00 - 23:00</p>
                    </div>

                    <div className="footer-column">
                        <h5>Contacto</h5>
                        <p>Book District</p>
                        <p>(555) 123-4567</p>
                    </div>
                </div>
            </footer>

            <section className="copyright">
                <div className="container">
                    <p>© 2025 Librería Nexus</p>
                </div>
            </section>
        </>
    );
}

export default Footer;
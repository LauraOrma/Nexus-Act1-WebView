import {useState} from 'react';
import './Header.css'
import {Link} from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="container">
            <a href="/" className="logo">
                <img src="/img/book.svg" alt="Ir a la página de inicio" height="32"/>
                <span>Librería Nexus</span>
            </a>

            <button
                className={menuOpen ? "menu-toggle active" : "menu-toggle"}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
                onClick={() => {
                    console.log("click");
                    setMenuOpen(!menuOpen);
                }}
            >
                <span className="hamburger"></span>
            </button>

            <nav className={menuOpen ? "menu active" : "menu"}>
                <ul className="menu-nav">
                    <li className="menu-item">
                        <Link onClick={closeMenu} to="/catalogo">Catálogo de Libros</Link>
                    </li>

                    <li className="menu-item">
                        <a href="#" onClick={closeMenu}>Sobre nosotros</a>
                    </li>

                    <li className="menu-item">
                        <button className="cart__toggle" onClick={() => alert("Carrito")}>
                            Ver carrito
                            <span className="cart-badge">0</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
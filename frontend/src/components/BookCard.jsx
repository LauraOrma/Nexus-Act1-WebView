import {Link} from 'react-router-dom';
import './BookCard.css'

function BookCard({libro}) {
    return (
        <div className="books__card">
            <div className="overflow__img">
                <div className="card__img">
                    <img src={libro.imagen} alt={libro.titulo}/>
                </div>
            </div>

            <div className="card__info">
                <h3>{libro.titulo}</h3>
                <p className="card__author">{libro.autor}</p>
                <p className="card__price">${libro.precio}</p>

                <div className="container__icon">
                    <i className="fa-solid fa-star info__icon"></i>
                    <i className="fa-solid fa-star info__icon"></i>
                    <i className="fa-solid fa-star info__icon"></i>
                    <i className="fa-solid fa-star info__icon"></i>
                    <i className="fa-solid fa-star info__icon"></i>
                </div>

                <div className="info__container">
                    <button className="btn__primary">
                        <i className="fa-solid fa-cart-shopping"></i> Añadir
                    </button>

                    <Link to={`/libro/${libro.id}`}>
                        Ver ficha
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BookCard;
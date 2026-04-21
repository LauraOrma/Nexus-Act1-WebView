import {Link} from 'react-router-dom';
import './BreadCrumbs.css'

function Breadcrumbs({items = []}) {
    return (<ul className="container breadcrumbs">
            {items.map((item, index) => (<li
                    key={index}
                    className={`breadcrumbs__item ${item.active ? 'breadcrumbs__item--active' : ''}`}>
                    {item.active ? (<span>{item.label}</span>) : (<Link to={item.to}>
                            <span>{item.label}</span>
                        </Link>)}
                </li>))}
        </ul>);
}

export default Breadcrumbs;
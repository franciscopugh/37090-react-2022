import { Link } from "react-router-dom";
const Item = ({prod}) => {
    return (
        <div className="card border-light mb-3 cardProducto">
                        <img src={prod.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{prod.nombre} {prod.modelo}</h5>
                            <p className="card-text">*{prod.marca}*</p>
                            <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                            <button className='btn btn-secondary'><Link className='nav-link' to={`/product/${prod.id}`}><i className="far fa-eye"></i></Link></button>
                    </div>
        </div>
    );
}

export default Item;

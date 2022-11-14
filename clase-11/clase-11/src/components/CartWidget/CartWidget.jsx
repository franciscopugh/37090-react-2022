import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext)
    return (
        <>
            <ul className='navbar-nav me-auto cartWidget'>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                        <p>{getItemQuantity()}</p>
                        <button className="btn btn-secondary"><i className="fas fa-shopping-cart fa-lg"></i></button>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default CartWidget;

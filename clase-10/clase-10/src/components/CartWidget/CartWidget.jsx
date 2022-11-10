import { Link } from "react-router-dom";
const CartWidget = () => {
    return (
        <>
            <ul className='navbar-nav me-auto cartWidget'>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                        <button className="btn btn-secondary"><i class="fas fa-shopping-cart fa-lg"></i></button>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default CartWidget;

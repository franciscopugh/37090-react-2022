import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; 
import { Link } from "react-router-dom";
const Cart = () => {
    const {cart, emptyCart, totalPrice, removeItem} = useContext(CartContext)

    return (
        <>
           
            {cart.length === 0 ? 
            <div>
                <p>Tu carrito esta vacio</p>
                <Link to={'/'}><button className="btn btn-dark">Ir al inicio</button></Link>
            </div> 
            : 
            <div className=" container cartContainer">
                {cart.map((prod,indice) =><div className="card mb-3" key={indice} style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={prod.img} className="img-fluid rounded-start" alt="..." />
                </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">Cantidad: {prod.cant}</p>
                            <p className="card-text">Precio unitario: $ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                            <p className="card-text">Subtotal: $ {new Intl.NumberFormat('de-DE').format(prod.precio * prod.cant)}</p>
                            <button className="btn btn-danger" onClick={() => removeItem(prod.id)}><i className="fas fa-trash-alt"></i></button>
                        </div>
                        
                    </div>
                </div>
            </div>
            )}
            <div>
                <p>Total: $ {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                <button className="btn btn-danger buttonCarts" onClick={emptyCart}>Limpiar Carrito</button>
                <Link to="/checkout">
                    <button className="btn btn-primary buttonCarts">Finalizar Compra</button>
                </Link>
            </div>
            </div>
            }
        </>
        
    );
}

export default Cart;

import { useContext }      from "react"
import { CartContext }     from "../../context/CartContext"
import { BsFillTrashFill } from "react-icons/bs";
import { Link }            from "react-router-dom";
import                          "./Cart.scss"

const Cart = () => {

    const {cart, cartTotal, cartEmpty, removeItem} = useContext(CartContext)

    return(

        <div className="cartContainerDiv">

            <div className="cartContainer">

            {
                cart.length === 0 
                ? <>
                    <div className="emptyCartContainer">
                        <h2 className="h2CartContainer">Tu carrito esta vacio</h2>
                        <hr></hr>
                        <Link to="/" className="buttonRedirect btn btn-primary">Ir a comprar</Link>
                    </div>
                </>
                :<>
                    <div className="productsCartContainer">
                        {
                            cart.map((item) => (
                                <div key={item.id}>

                                    <h3>{item.nombre}</h3>
                                    <h3>${item.precio}</h3>
                                    <h3>Cantidad: {item.cantidad}</h3>
                                    <button onClick={() => removeItem(item.id)} className="buttonProduct btn btn-danger mx-2">
                                        <BsFillTrashFill/>
                                    </button>

                                </div>
                            ))
                        }

                        <hr></hr>
                        <div className="totalCartContainer">
                            <h3>Total: ${cartTotal()}</h3>
                            <button onClick={cartEmpty} className="buttonCart btn btn-danger"> Vaciar carrito </button>
                        </div>

                    </div>

                    </>
                }

            </div>

        </div>

    )
}

export default Cart
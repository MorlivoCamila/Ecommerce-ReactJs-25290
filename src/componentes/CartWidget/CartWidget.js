import { useContext } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom'
import './CartWidget.scss'

const CartWidget = () => {

    const { cartQuantity, cart } = useContext(CartContext)
    

    return(
        <Link to="/cart" className={`widget ${cart.length > 0 ? 'widget-active' : '' }`}>
            
            <span> 
                <BsCartCheckFill/> 
                {cartQuantity()}
            </span>
        </Link>
    )
}

export default CartWidget
import Counter                from "../../../Counter/Counter"
import {useContext, useState} from "react"
import { CartContext }        from "../../../../context/CartContext"
import { Link }               from "react-router-dom"
import                        "./ItemDetail.scss"


const ItemDetail = ({item}) => {

    const {addToCart,isInCart} = useContext(CartContext)    
    const [cantidad, setCantidad]    = useState(1)

    const handleAgregar = () => {

        const itemToCart = {
            id:item.id,
            nombre: item.nombre,
            precio: item.precio,
            cantidad
        }

        addToCart(itemToCart)
    }

    return(
        <div className="itemDetailContainer">
            <img src={item.img}/>
            <h3>{item.nombre}</h3>
            <p>Descripcion: {item.desc}</p>
            <h4>Precio: {item.precio}</h4>  

            {
                item.promo > 0 
                ? <h5 style={{color: 'red'}}>{item.promo}% OFF</h5> 
                : ''
            }

            {
                isInCart(item.id)
                ?   <Link to="/cart" className="btn btn-success - my-2">Terminar mi compra</Link>
                :   <Counter 
                    max={item.stock} 
                    counter={cantidad} 
                    setCounter={setCantidad} 
                    handleAgregar={handleAgregar}
                />
            }
   
        </div>
    )
}

export default ItemDetail
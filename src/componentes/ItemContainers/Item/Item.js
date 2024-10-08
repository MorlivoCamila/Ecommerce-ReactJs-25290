import { Link } from "react-router-dom"
import               "./Item.scss"

const Item = ({producto}) =>  {

    return(
        <div className="itemProduct" key={producto.id}>
            <div>
                <img src={producto.img}/>
                <h4>{producto.nombre}</h4>
                <p>Precio: ${producto.precio}</p>
                <small>Stock disponible: {producto.stock}</small>
                {
                    producto.stock > 0
                    ? <Link to={`/item/${producto.id}`} className="btn btn-primary my-2" >Ver mas</Link>
                    : <p className="btn btn-outline-danger">Sin stock</p>
                }
            </div>
        </div>
    )
}

export default Item
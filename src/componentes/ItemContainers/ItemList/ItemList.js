import Item from '../Item/Item.js'
import           "./ItemList.scss"

const ItemList = ( {productos = []} ) => {

    return(
        <div className="container my-5">
            
            { 
                productos.map((prod) => {

                    if(prod.stock > 0){

                        return <Item producto={prod} key={prod.id}/>

                    }else{

                        return null
                        
                    }
                }) 
           
            }

        </div>
    )
}

export default ItemList
import { useEffect, useState } from "react"
import { useParams }           from "react-router-dom"
import ItemDetail              from "./ItemDetail/ItemDetail"
import {doc, getDoc}           from "firebase/firestore"
import {db}                    from "../../../firebase/config.js"
import Loader                  from "../../Loader/Loader.js"

const ItemDetailContainer = () => {

    const [item, setItem]       = useState(null)
    const {itemId}              = useParams()
    const [loading, setLoading] = useState(true)

    console.log(itemId);
    console.log(item)

    useEffect(() => {

        setLoading(true)

        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()});
                
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <div>

            {
                loading 
                ? <Loader/>
                : <ItemDetail item={item}/>
            }

        </div>
    )
}

export default ItemDetailContainer
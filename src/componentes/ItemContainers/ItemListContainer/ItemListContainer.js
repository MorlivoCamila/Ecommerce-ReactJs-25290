import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState }               from 'react'
import { useParams }                         from 'react-router-dom'
import { db }                                from '../../../firebase/config'
import ItemList                              from '../ItemList/ItemList'
import Loader                                from '../../Loader/Loader'
import                                            './ItemListContainer.scss'
const ItemListContainer = () => {

    const [productos,   setProductos]   = useState([])
    const [loading,     setLoading]     = useState([])
    const { categoryId }                = useParams()    
     
    useEffect(() => {

        setLoading(true)

        const productosRef = collection(db, 'productos')
        const q            =  categoryId 
                              ? query(productosRef, where('category', '==', categoryId)) //
                              : productosRef
        
        getDocs(q)
            .then((resp) => {

                const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()})) 
                setProductos(productosDB)

            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    return (

        <div className="container my-5">
                                                
            {
                loading 
                ? <Loader/>
                : <ItemList productos={productos}/>
            }
         
        </div>

    )
}

export default ItemListContainer
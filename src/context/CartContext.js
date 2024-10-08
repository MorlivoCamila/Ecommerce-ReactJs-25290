import { createContext, useContext, useEffect } from "react";
import { useState }                             from "react";
import Swal                                     from "sweetalert2"

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(init)

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeItem = (id) => {
        setCart( cart.filter( (item) => item.id !== id ) )
    }

    const isInCart = (id) => {
        return cart.find((item) => item.id === id)
    } 

    const cartQuantity = () => {
        return cart.reduce( (acc, item) => 
        acc + item.cantidad, 0
        )
    }
    
    const cartTotal = () => {
        return cart.reduce( (acc, item) => 
            acc + item.cantidad * item.precio, 0
        )
    }


    const cartEmpty = () =>{

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Estás segurx?",
            text: "No volveras a ver este carrito!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])

              swalWithBootstrapButtons.fire({
                title: "Eliminado!",
                text: "Tu carrito ha sido eliminado.",
                icon: "success"
              });
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Eliminación cancelada!",
                text: "Tu carrito está a salvo :)",
                icon: "error"
              });
            }
          });


    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            cartEmpty,
            removeItem
        }}>

            {children}

        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}
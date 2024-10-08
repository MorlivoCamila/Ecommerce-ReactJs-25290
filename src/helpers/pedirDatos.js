import { stock } from '../data/data.js'

export const pedirDatos = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {               
            resolve(stock)
        }, 500)

        // setTimeout(() => {
        //     if(param){
        //         resolve("Promesa resuelta")
        //     }else{
        //         reject("Promesa rechazada")
        //     }
        // }, 3000)
    })
}
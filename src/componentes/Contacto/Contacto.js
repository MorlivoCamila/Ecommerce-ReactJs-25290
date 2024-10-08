import FormContact from "./FormContact/FormContact"
import "./Contacto.scss"

const Contacto = () => {

    return(

        <div className="divFormulario">

            <div className="divFormulario__Contacto">
                <div>
                    <h3 className="contactoNumero">(+54) 11-54133460</h3>
                    <h3 className="contactoEmail">camobravia@gmail.com</h3>
                </div>
                <div>
                    <h3 className="direccionCalle">La rioja 1723</h3>
                    <h3 className="direccionLocalidad">CABA, 1244</h3>
                </div>
            </div>

            <div>
                <FormContact/>
            </div>

        </div>
    )
}

export default Contacto
import "./FormContact.scss"
const FormContact = () => {
    return (
        <div>
            <form className="formularioContainer">
                <div className="labelContainers">
                    <label>
                        <input type="text" name="name" placeholder="Ingresa tu nombre" aria-label="Tu nombre"/>
                    </label>
                    <label>
                        <input type="text" name="name" placeholder="Ingresa tu email" aria-label="Tu correo electrónico"/>       
                    </label>
                    <label>
                        <input type="text" name="name" placeholder="Ingresa tu mensaje" aria-label="Tu mensaje"/>
                    </label>
                </div>

                <div className="buttonContainer">
                    <button type="button" class="btn btn-outline-info">
                        <a href="">Enviar</a> 
                    </button>                               
                </div>
            </form>
        </div>
    )
}

export default FormContact
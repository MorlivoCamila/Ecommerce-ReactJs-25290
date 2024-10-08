import                  "./Footer.scss"
import RedesWidget from "../Redes/RedesWidget.js"

const Footer = () => {


    return(

        <div className="footerContainer"> 
            <div className="footerContainerDiv">
                <div className="footerContainerDireccion">
                    <h2>ECOMMERCE</h2>
                    <p>La rioja 1723, PB A, 1244, Parque Patricios, CABA</p>                    
                </div>
                <div className="footerContainerRedes">
                    <RedesWidget/>
                </div>           
            </div>
        </div>
    )
}

export default Footer
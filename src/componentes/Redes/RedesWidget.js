import { ImFacebook2 } from "react-icons/im";
import "./Redes.scss"
import { FiInstagram } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";

const CartWidget = () => {

    return(
        <div className="containerRedes">
            <div className="containerRed">
                <span>
                    <ImFacebook2/>
                </span>
            </div>
            <div className="containerRed">
                <span>
                    <FiInstagram/>
                </span>            
            </div>
            <div className="containerRed">
                <span>
                    <RiTwitterXFill/>
                </span>
            </div>  
        </div>  
         
    )
}

export default CartWidget
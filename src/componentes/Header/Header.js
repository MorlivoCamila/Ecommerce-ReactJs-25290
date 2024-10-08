import                 './Header.scss'
import                 'bootstrap/dist/css/bootstrap.min.css'
import { Link }   from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const Header = () => {

    return(
        <header className="bg-header">

            <div className="header-container">

                <Link to="/" className='header-title'>ECOMMERCE </Link>
                               
                <nav className="header-navbar">
                    <ul className='header-navList'>
                        <li className='header-navListItem'>
                            <Link to='/productos/remeras' className='header-navlink'>Remeras</Link>
                        </li>
                        <li className='header-navListItem'>
                            <Link to='/productos/zapatillas' className='header-navlink'>Zapatillas</Link>
                        </li>
                        <li className='header-navListItem'>
                            <Link to='/productos/gorros' className='header-navlink'>Gorros</Link>
                        </li>
                        <li className='header-navListItem'>
                            <Link to='/contacto' className='header-navlink'>Contacto</Link>
                        </li>
                    </ul>
 
                </nav>

                <CartWidget/>

            </div>

        </header>
    )
    
}

export default Header
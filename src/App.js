import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider }                 from './context/CartContext.js';
import { DarkModeProvider }             from './context/DarkModeContext.js';
import Header                           from './componentes/Header/Header.js';
import ItemListContainer                from './componentes/ItemContainers/ItemListContainer/ItemListContainer.js'
import Contacto                         from './componentes/Contacto/Contacto.js';
import ItemDetailContainer              from './componentes/ItemContainers/ItemDetailContainer/ItemDetailContainer.js';
import Cart                             from './componentes/Cart/Cart.js'
import Footer                           from './componentes/Footer/Footer.js';

function App() {
  return (      

    <CartProvider>
      <DarkModeProvider>
        <BrowserRouter>
        
          <Header/>

          <Routes>
            <Route path='/'                      element={<ItemListContainer/>} />
            <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId'          element={<ItemDetailContainer/>}/>
            <Route path='/contacto'              element={<Contacto/>} />
            <Route path='/cart'                  element={<Cart/>}/>
          </Routes>

          <footer>
            <Footer/>
          </footer>

        </BrowserRouter> 
      </DarkModeProvider> 
    </CartProvider>

  );
  
}

export default App;
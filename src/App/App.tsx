import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ServicesPage, ContactPage, ProductsPage, HomePage, CartPage} from '../pages';
import {Navbar, Footer} from '../components';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<HomePage/>}>
                    </Route>

                    <Route path='/contact' element={<ContactPage/>}>
                    </Route>

                    <Route path='/products' element={<ProductsPage/>}>
                    </Route>

                    <Route path='/services' element={<ServicesPage/>}>
                    </Route>

                    <Route path='/cart' element={<CartPage/>}>
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>

        </>
    );
}

export default App;
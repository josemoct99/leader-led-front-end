import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ServicesPage, ContactPage, ProductsPage,HomePage } from './pages';
import { Navbar } from './components';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}>
          </Route>

          <Route path='/contact' element={<ContactPage />}>
          </Route>

          <Route path='/products' element={<ProductsPage />}>
          </Route>

          <Route path='/services' element={<ServicesPage />}>
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
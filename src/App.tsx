import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ServicesPage, ContactPage, ProductsPage } from './pages';
import { Navbar, Hero, Content } from './components';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
      
        <Routes>
          <Route path='/' element={<Content />}>
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
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Store from './pages/Store';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import CartProvider from './CartContext';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <CartProvider>
      <Container>
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
        <Routes>
          <Route index element={<Store/>}/>
          <Route path="success" element={<Success/>}/>
          <Route path="cancel" element={<Cancel/>}/>
          <Route path="aboutus" element={<AboutUs/>}/>
        </Routes>
      </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;

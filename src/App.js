import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Error from './pages/Error';
import Details from './components/Details';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <>
      <CartProvider >
        <Router >
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="/details" element={<Details />} />
            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </>
  );
}

export default App;

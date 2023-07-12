import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { CartContext } from '../context/CartContext';

export default function Navbar() {

 const { cart } = useContext(CartContext);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [showItemCount, setShowItemCount] = useState(false);

  useEffect(() => {
    setShowItemCount(cart.length > 0)
    setCartItemCount(cart.length);
  }, [cart]);


  return (
    <div >
      <div className='navbar'>
        <Link to="/" className="navLink" >
          <p>Home</p> <AiOutlineHome className='navbarIcon'/>
        </Link>
        <Link to="/cart" className="navLink" >
         <p>Cart</p> <AiOutlineShoppingCart className='navbarIcon'/> 
           {showItemCount && <sup><span className="cartItemCount">{cartItemCount}</span></sup>}
        </Link>
      </div>
    
    </div>
  )
}


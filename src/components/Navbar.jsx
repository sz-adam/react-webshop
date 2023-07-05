import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {
  const [mobile, setMobile] = useState(false)

  const closeMobileMenu = () => {
    setMobile(false);
  }
  return (
    <div className='navbar'>
      <div className={mobile ? 'nav-links-mobile' : 'nav-links'}>
        <Link to="/" className="navLink"onClick={closeMobileMenu} >
          {mobile ? 'Home' :<AiOutlineHome />}
        </Link>
        <Link to="/cart" className="navLink" onClick={closeMobileMenu}>
          {mobile ? 'Cart' :  <AiOutlineShoppingCart />}
        </Link>
      </div>
      <button className='mobile-menu-icon' onClick={() => setMobile(!mobile)}>
        {mobile ? <AiOutlineClose />: <GiHamburgerMenu /> }
      </button>
    </div>
  )
}


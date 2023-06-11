import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button } from './Button'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const hancleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // mobile menu disappears when screen is resized
  const showButton = () => {
    if(window.innerWidth < 961){
      setButton(false)
    } else {
      setButton(true)
    }
  }

  
  // when screen is resized, showButton is called
  window.addEventListener('load', showButton);
  window.addEventListener('resize', showButton);
  

  return (
    <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              WORKOUT CHALLENGES <i className="fa-solid fa-person-running"></i>
            </Link>
            <div className="menu-icon" onClick={hancleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/how-to" className="nav-links" onClick={closeMobileMenu}>
                  How to join
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/highlights" className="nav-links" onClick={closeMobileMenu}>
                  Highlights
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </li>
            </ul>

            {/* {button && <Button buttonStyle='btn--outline' href='/sign-up'>SIGN UP</Button>} */}

          </div>
        </nav>
    </>
  )
}

export default Navbar
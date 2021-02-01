import React, { useState } from 'react';

import '../css/Navbar.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import logo from "../../images/logo.png"

function Navbar() {
 
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    
      <IconContext.Provider value={{ color: '#fff'}}>
        <nav className='navbar'>
            <div className='navbar-container container lmargin' >
                  <img  src={logo} alt="name" style={{height: '3.3rem',marginTop:'2px'}}/>
                  <div className='menu-icon' style={{ color: '#fff' }} onClick={handleClick}>
                       {click ? <FaTimes /> : <FaBars />}
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                      <li className='nav-item current'> 
                          <a onClick={closeMobileMenu} className=" nav-links smoothscroll" href="/#Home" >Home</a>
                      </li>
                      <li className='nav-item'>
                          <a onClick={closeMobileMenu} className=" nav-links smoothscroll" href="/#Skills">Skills</a>
                      </li>
                      <li className='nav-item current'>
                          <a onClick={closeMobileMenu} className=" nav-links smoothscroll" href="/#About" >About</a>
                      </li>
                      <li className='nav-item'>  
                          <a onClick={closeMobileMenu} className=" nav-links smoothscroll" href="/#Education">Education</a>                 
                      </li>
                      <li className='nav-item'>
                          <a onClick={closeMobileMenu} className=" nav-links smoothscroll" href="/#Project">Project</a>
                      </li>
                      <li className='nav-item'>
                        <a onClick={closeMobileMenu} className=" nav-links smoothscroll" href="/#Contact">Contact</a>
                      </li>
                  </ul>
            </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;

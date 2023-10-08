import React, { useState, useEffect } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.css';
// import About from './About';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmallerScreen = window.innerWidth < 550;
      if (!isSmallerScreen) {
        setIsOpen(true); // Keep the menu open on bigger screens
      } else {
        setIsOpen(false); // Close the menu on smaller screens
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleLinkClick = () => {
    if (isOpen) {
      if (window.innerWidth < 550){
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      <div className='nv_container'>
        <nav>
          <div className='nav-logo'>
            {/* <RouterLink className='link' to=""> */}
              <img className='logo-img' src="./assets/img/ZUDIO MEDIA.svg" alt="icon" />
              {/* <h2>Hey! there</h2> */}
              {/* </RouterLink> */}
            {/* <h5>Puppy World</h5> */}
          </div>
          <div className='menu-link'>
            {isOpen && (
              <ul>
                <li><Link to="" onClick={handleLinkClick}>HOME</Link></li>
                <li><Link smooth to="/about" onClick={handleLinkClick}>SERVICE</Link></li>
                <li><Link smooth to="/product" onClick={handleLinkClick}>PORTFOLIO</Link></li>
                <li><Link smooth to="/training" onClick={handleLinkClick}>ABOUT</Link></li>
                {/* <Link className='Butt_contact' smooth to="#contact" onClick={handleLinkClick}><button className='nav_contact' >Contact us</button></Link> */}
              </ul>
              
            )}
          </div>
          <Link className='Butt_contact' smooth to="#contact" onClick={handleLinkClick}><button className='nav_contact' >LET’S<br/>TALK</button></Link>
          
        </nav>
      </div>
    </>
  );
};

export default Navbar;

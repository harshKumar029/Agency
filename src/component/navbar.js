import React, { useState, useEffect } from 'react';
import Contact from './contact form/contact.js';
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.css';

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
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

  const handleLinkClick = () => {
    if (isOpen && window.innerWidth < 550) {
      setIsOpen(false);
    }
  };

  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.classList.add('disable-scroll'); // Disable scrolling
    document.getElementsByClassName('footer')[0].style = "display:none"
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.classList.remove('disable-scroll'); // Enable scrolling
    document.getElementsByClassName('footer')[0].style = "display:block"
    
  };

  return (
    <>
      <div className='nv_container'>
        <nav>
          <div className='nav-logo'>
            <img className='logo-img' src="./assets/img/ZUDIO MEDIA.svg" alt="icon" />
          </div>
          <div className='menu-link'>
            {isOpen && (
              <ul>
                <li><Link smooth to="#home" onClick={handleLinkClick}>HOME</Link></li>
                <li><Link smooth to="#service" onClick={handleLinkClick}>SERVICE</Link></li>
                <li><Link smooth to ="#work" onClick={handleLinkClick}>WORK</Link></li>
                <li><Link smooth to="#about" onClick={handleLinkClick}>ABOUT</Link></li>
              </ul>
            )}
          </div>
          <Link className='Butt_contact' onClick={openPopup} ><button className='nav_contact' >LET’S<br/>TALK</button></Link>
          <Contact isOpen={isPopupOpen} onClose={closePopup} />
        </nav>
      </div>
    </>
  );
};

export default Navbar;

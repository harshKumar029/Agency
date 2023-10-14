import React, { useState } from 'react';
import Contact from '../contact form/contact.js';
import { HashLink as Link } from 'react-router-hash-link';
import './hero.css'

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.classList.add('disable-scroll'); // Disable scrolling
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.classList.remove('disable-scroll'); // Enable scrolling
  };
  
  return (
    <>
      <div className="heroSec" id="home">
        <div className="hero-cont">

          <h1 className="HeroTxt">
            We help brands
            <br></br>
            to make an
            <span> impact </span>
            <br></br>
            in the market
          </h1>
          <h3>Your go-to design and development agency,<br /> where creativity meets technology to bring your<br /> digital dreams to life.
          </h3>
          <div className="get-Started">
            <button  onClick={openPopup} className="seeOurProject-button1">Get Started</button>
            <Contact isOpen={isPopupOpen} onClose={closePopup} />
            <Link smooth to="#work"><button href="#" className="seeOurProject">See Our Projects</button></Link>
          </div>
        </div>
          <img className="hero-img"src="./assets/img/hero-img.webp" alt="hero-img" />
      </div>
    </>
  );
};

export default Hero;

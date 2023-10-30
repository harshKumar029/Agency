import React, { useState } from 'react';
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Contact from '../contact form/contact.js';
import { IoLogoWhatsapp } from "react-icons/io";
import './footer.css'

const Footer = () => {
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
            <div className='footer'>
                <div className='footer-content'>
                    <div className='logo-mob'><img src='./assets/img/ZUDIO MEDIA.svg' alt='logo' /></div>
                    <div className='got-proj'>
                        <h3>GOT A PROJECT?</h3>
                        <h5 onClick={openPopup}>Contact Us</h5>
                        <Contact isOpen={isPopupOpen} onClose={closePopup} />
                    </div>
                    <div>
                        <h2>OUR ADDRESS</h2>
                        <h4>New Ashok Nagar, Delhi <br /> 110096</h4>
                    </div>
                    <div className='email'>
                        <h2 >CONTACT US</h2>
                        <a  href='mailto:contact@zudiomedia.com' aria-label='email'><h4>contact@zudiomedia.com</h4></a>
                    </div>
                    <div>
                        <h2>Follow us on</h2>
                        <div className='social-icon'>
                            <a href='https://www.instagram.com/zudio_media/' aria-label='Instagram'><AiFillInstagram className='soc-icon' /></a>
                            <a href='#' aria-label='Whatsapp' ><IoLogoWhatsapp className='soc-icon' /></a>
                            <a href='#' aria-label='Linkedin'><AiFillLinkedin className='soc-icon' /></a>
                        </div>
                    </div>
                </div>
                <div className='hr'>
                    <div className='hrline'></div>
                </div>
                <div className='footer-copyright'>
                    <div className='rights'>
                        <div className='logo'><img src='./assets/img/ZUDIO MEDIA.svg' alt='logo' /></div>
                        <h5>© 2023 Zudio Media Pvt. Ltd. All rights reserved</h5>
                        <div>
                            <h5>Privacy Policy | Term of use</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
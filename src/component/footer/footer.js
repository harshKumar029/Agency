import React from 'react'
import { AiFillFacebook,AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import './footer.css'

const footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-content'>
                    <div className='got-proj'>
                        <h3>GOT A PROJECT?</h3>
                        <h5>Contact Us</h5>
                    </div>
                    <div>
                        <h2>OUR ADDRESS</h2>
                        <h4>New Ashok Nagar, Delhi <br /> 110018</h4>
                    </div>
                    <div>
                        <h2>CONTACT US</h2>
                        <h4>contact@zudiomedia.com</h4>
                    </div>
                    <div>
                        <h2>Follow us on</h2>
                        <div>
                            <AiFillInstagram className='soc-icon' />
                            <IoLogoWhatsapp className='soc-icon' />
                            <AiFillFacebook className='soc-icon' />
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

export default footer
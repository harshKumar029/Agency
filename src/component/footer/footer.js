import React from 'react'
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
                        <h4>Info@greyspacestu</h4>
                    </div>
                    <div>
                        <h2>JOIN US</h2>
                        <h4>Info@greyspacestu</h4>
                    </div>
                </div>
                <div className='hr'>
                    <div className='hrline'></div>
                </div>
                <div className='footer-copyright'>
                    <div className='rights'>
                        <div className='logo'><img src='./assets/img/ZUDIO MEDIA.svg' alt='logo' /></div>
                        <h5>All Rights reserved 2023 | Privacy Policy | Term of use </h5>
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
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
                        <h4>56 Basement, NRI <br/> Colony, Mandakini <br/> New Delhi - 110019 <br/> Info@greyspacestu</h4>
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
                <div className='rights'>
                    <h5>© 2023 Lucid Design India Pvt. Ltd. All rights reserved</h5>
                </div>
            </div>
        </>
    )
}

export default footer
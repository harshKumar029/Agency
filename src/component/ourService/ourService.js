import React from 'react'
import "./ourService.css"

const OurService = () => {

  return (
    <>
      <div className='ourService' id='service'>
        <div className='serviceContent'>
          <h4>OUR SERVICES THAT</h4>
          <h1>Transform Ideas into Digital Marvels</h1>
        </div>
        <div className='serviceList1 slider-container'>
          <div className='slider1'>
            <div className='slide' style={{ backgroundColor: "#FF9344" }}>Brand Design</div>
            <div className='slide' >UI&UX Design</div>
            <div className='slide' style={{ backgroundColor: "#FFD74B" }}>Graphic Design</div>
            <div className='slide' >Content Creation</div>
            <div className='slide' style={{ backgroundColor: "#63D683" }}>Website Development</div>
            <div className='slide' >Digital Marketing</div>
          </div>
          <div className='slider1'>
            <div className='slide' style={{ backgroundColor: "#FF9344" }}>Brand Design</div>
            <div className='slide' >UI&UX Design</div>
            <div className='slide' style={{ backgroundColor: "#FFD74B" }}>Graphic Design</div>
            <div className='slide' >Content Creation</div>
            <div className='slide' style={{ backgroundColor: "#63D683" }}>Website Development</div>
            <div className='slide' >Digital Marketing</div>
          </div>

        </div>
        <div className='serviceList2 slider-container'>
          <div className='slider2'>
            <div className='slide' style={{ backgroundColor: "#8C64FF" }}>Logo Design</div>
            <div className='slide'>Social Media Marketing</div>
            <div className='slide' style={{ backgroundColor: "#FF3F84" }}>Print Media</div>
            <div className='slide'>Product Design</div>
            <div className='slide' style={{ backgroundColor: "#FF9344" }}>Seo</div>
            <div className='slide'>App Development</div>
          </div>
          <div className='slider2'>
          <div className='slide' style={{ backgroundColor: "#8C64FF" }}>Logo Design</div>
            <div className='slide'>Social Media Marketing</div>
            <div className='slide' style={{ backgroundColor: "#FF3F84" }}>Print Media</div>
            <div className='slide'>Product Design</div>
            <div className='slide' style={{ backgroundColor: "#FF9344" }}>Seo</div>
            <div className='slide'>App Development</div>
          </div>

        </div>

      </div>
    </>
  )
}

export default OurService

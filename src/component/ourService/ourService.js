import React, { useEffect } from 'react'
import "./ourService.css"

const OurService = () => {

  return (
    <>
      <div className='ourService'>
        <div className='serviceContent'>
          <h4>OUR SERVICES</h4>
          <h1>We Offer a Wide Range Of Service</h1>
        </div>
        <div className='serviceList1 slider-container'>
          <div className='slider1'>
            <div className='slide' style={{backgroundColor:"#FF9344"}}>First1</div>
            <div className='slide' >OUR SERVICES1</div>
            <div className='slide' style={{backgroundColor:"#FFD74B"}}>OUR SERVICES1</div>
            <div className='slide' >OUR SERVICES1</div>
            <div className='slide' style={{backgroundColor:"#63D683"}}>OUR SERVICES1</div>
            <div className='slide' >OUR SERVICES1</div>
          </div>
          <div className='slider1'>
          <div className='slide' style={{backgroundColor:"#FF9344"}}>First1</div>
            <div className='slide' >OUR SERVICES1</div>
            <div className='slide' style={{backgroundColor:"#FFD74B"}}>OUR SERVICES1</div>
            <div className='slide' >OUR SERVICES1</div>
            <div className='slide' style={{backgroundColor:"#63D683"}}>OUR SERVICES1</div>
            <div className='slide' >OUR SERVICES1</div>
          </div>
          
        </div>
        <div className='serviceList2 slider-container'>
          <div className='slider2'>
            <div className='slide' style={{backgroundColor:"#8C64FF"}}>First1</div>
            <div className='slide'>OUR SERVICES1</div>
            <div className='slide' style={{backgroundColor:"#FF3F84"}}>OUR SERVICES1</div>
            <div className='slide'>OUR SERVICES1</div>
            <div className='slide' style={{backgroundColor:"#FF9344"}}>OUR SERVICES1</div>
            <div className='slide'>OUR SERVICES1</div>
          </div>
          <div className='slider2'>
          <div className='slide' style={{backgroundColor:"#8C64FF"}}>First1</div>
            <div className='slide'>OUR SERVICES1</div>
            <div className='slide' style={{backgroundColor:"#FF3F84"}}>OUR SERVICES1</div>
            <div className='slide'>OUR SERVICES1</div>
            <div className='slide' style={{backgroundColor:"#FF9344"}}>OUR SERVICES1</div>
            <div className='slide'>OUR SERVICES1</div>
          </div>
         
        </div>  
       
      </div>
    </>
  )
}

export default OurService

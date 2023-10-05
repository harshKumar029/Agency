import React , { useEffect }from 'react'
import "./ourService.css"

const OurService = () => {
  useEffect(() => {
    const slider = document.querySelector('.slider');

    const handleAnimationIteration = () => {
      // Reset the animation when it completes one cycle
      slider.style.animation = 'none';
      setTimeout(() => {
        slider.style.animation = 'slide 10s linear infinite';
      });
    };

    slider.addEventListener('animationiteration', handleAnimationIteration);

    return () => {
      slider.removeEventListener('animationiteration', handleAnimationIteration);
    };
  }, []);

  return (
    <>
    <div className='ourService'> 
        <div className='serviceContent'>
            <h4>OUR SERVICES</h4>
            <h1>We Offer a Wide Range Of Service</h1>
        </div>
        <div className='serviceList slider-container'>
        <div className=' abc serviceFirst slider'>
            <div className='slide'><span>OUR SERVICES</span></div>
            <div className='slide'><span>OUR SERVICES</span></div>
            <div className='slide'><span>OUR SERVICES</span></div>
            <div className='slide'><span>OUR SERVICES</span></div>
            <div className='slide'><span>OUR SERVICES</span></div>
            {/* <!-- Duplicate the slides to create a seamless loop --> */}
            <div className='slide'><span>OUR SERVICES</span></div>
            <div className='slide'><span>OUR SERVICES</span></div>
            <div className='slide'><span>OUR SERVICES</span></div>
            <div className='slide'><span>OUR SERVICES</span></div>
            <div className='slide'><span>OUR SERVICES</span></div>
          </div>
          <div className='serviceFirst slider'>
            <div className='slide'><span className='test'>OUR SERVICES</span></div>
            <div className='slide'><span className='test'>OUR SERVICES</span></div>
            <div className='slide'><span className='test'>OUR SERVICES</span></div>
            <div className='slide'><span className='test'>OUR SERVICES</span></div>
            <div className='slide'><span className='test'>OUR SERVICES</span></div>
            {/* <!-- Duplicate the slide className='test's to create a seamless loop --> */}
            <div className='slide'><span className='test'>OUR SERVICES</span></div>
            <div className='slide'><span className='test'>OUR SERVICES</span></div>
            <div className='slide'><span className='test'>OUR SERVICES</span></div>
            <div className='slide'><span className='test'>OUR SERVICES</span></div>
            <div className='slide'><span className='test'>OUR SERVICES</span></div>
          </div>
          <div className='serviceSecond slider'>
            <div className='slide'><span>OUR SERVICES</span></div>
            <div className='slide'><span>OUR SERVICES</span></div>
            <div className='slide'><span>OUR SERVICES</span></div>
            <div className='slide'><span>OUR SERVICES</span></div>
            <div className='slide'><span>OUR SERVICES</span></div>
            {/* <!-- Duplicate the slides to create a seamless loop --> */}
            <div className='slide'><span>OUR SERVICES</span></div>
            <div className='slide'><span>OUR SERVICES</span></div>
            <div className='slide'><span>OUR SERVICES</span></div>
            <div className='slide'><span>OUR SERVICES</span></div>
            <div className='slide'><span>OUR SERVICES</span></div>
          </div>
        </div>
    </div>
    </>
  )
}

export default OurService

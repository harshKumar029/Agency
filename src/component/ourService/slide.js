import React, { useEffect } from 'react';
import './slide.css';

const Slide = () => {
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
  <div class="slider-container">
    <div class="slider">
      <div class="slide">Slide 1</div>
      <div class="slide">Slide 2</div>
      <div class="slide">Slide 3</div>
      <div class="slide">Slide 4</div>
      {/* <!-- Duplicate the slides to create a seamless loop --> */}
      <div class="slide">Slide 1</div>
      <div class="slide">Slide 2</div>
      <div class="slide">Slide 3</div>
      <div class="slide">Slide 4</div>
    </div>
  </div>

    </>
  );
};

export default Slide;

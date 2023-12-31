import React, { useEffect } from 'react';
import "./weDo.css";

const WeDo = () => {
  useEffect(() => {
    console.log(navigator.userAgent);
          if (/iPhone[^;]+/gi.test(navigator.userAgent)) {
              // Get the element with the class .weDoContainer
              var weDoContainer = document.querySelector('.img-star');
  
              // Check if the element exists
              if (weDoContainer) {
                  // Apply specific styles to the .weDoContainer element
                  weDoContainer.style.display = 'block';
                  // Do not set background-attachment here as it may not work as expected on iOS
              }
          }
  })
  return (
    <>
      <div className="weDoContainer" id="about">
        <div className="flex-box">
          <div className="img-star"></div>
          <div className="img-dex"><img src="./assets/img/rocket1.svg" alt="rocket-img"/></div>
          <div>
            <div className="weDo">
              <h3>OUR MISSION</h3>
              <h1>Why Zudiomedia?</h1>
            </div>
            <div className="img-mob"><img src="./assets/img/rocket2.svg" alt="rocket-img"/></div>
            <div className="weDoPara">
              <p>
              Welcome to our creative playground!  we're the <br/> wizards behind the digital curtain, conjuring up <br/> pixel-perfect magic. <br/>
              <br/>Let's ride the design and development  <br/>rollercoaster together, and make your online <br/> presence the coolest team on the internet block. <br/>
               Buckle up, it's going to be one heck of a creative <br/> ride! 🚀✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeDo;

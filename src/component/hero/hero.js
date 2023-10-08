import React from "react";
import './hero.css'

const hero = () => {
  return (
    <>
      <div className="heroSec">
        <div className="hero-cont">

          <h1 className="HeroTxt">
            We help brands
            <br></br>
            to make an
            <span> impact </span>
            <br></br>
            in the market
          </h1>
          <h3>Your go-to design and development agency,<br/> where creativity meets technology to bring your<br/> digital dreams to life.
          </h3>
          <div className="getStarted">
            <button href="#" className="seeOurProject-button1">Get Started</button>
            <button href="#" className="seeOurProject">See Our Projects</button>
          </div>
        </div>
        <div className="hero-img">
        <div class="circle-gradient"></div>
          <img src="./assets/img/hero-img.png" alt="hero-img" />
         </div>
      </div>
    </>
  );
};

export default hero;

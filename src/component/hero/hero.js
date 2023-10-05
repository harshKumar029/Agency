import React from "react";
import './hero.css'

const hero = () => {
  return (
    <>
      <div className="heroSec">
        <div>

          <h1 className="HeroTxt">
            We help brands
            <br></br>
            to make an
            <span> impact </span>
            <br></br>
            in the market
          </h1>
          <h3>We help brands to make an We help brands to make an  <br /> <spam>impact </spam>
            We help brands to make an We help brands
          </h3>
          <div className="getStarted">
            <button href="#" className="seeOurProject-button1">Get Started</button>
            <button href="#" className="seeOurProject">See Our Projects</button>
          </div>
        </div>
          {/* <img className="hero-img" src="./assets/img/hero-img.png" alt="hero-img" /> */}

      </div>
    </>
  );
};

export default hero;

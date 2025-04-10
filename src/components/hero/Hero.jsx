import React from "react";
import "./Hero.css";
import DarkArrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          Post Prison Helpers <br/>
        </h1>
        <p>
          Nous sommes la PPH, un group de thérapises et divertisseurs.
        </p>

        <button className="btn"> Explorez <img src={DarkArrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;

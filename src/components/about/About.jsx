import React from "react";
import "./About.css";
import AboutLogo from "../../assets/about.png";
import PlayIcon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about" id='about'>
      <div className="about-left">
        <img className="about-img" src={AboutLogo} alt="" />
        <img className="play-icon" src={PlayIcon} alt="" />
      </div>
      <div className="about-right">
        <h2>À propos de PPH</h2>
        <p>
          Nous sommes la PPH, un group de thérapises et divertisseurs, suivant
          les prisonniers durant et après leurs emprisonnements. 
        </p>
        <p>
          Notre rôle est de porter aide à ces gens, à faire ce que notre gouvernement refuse de
          faire, à changer. 
        </p>  
        <p>  
          Nous observons le progrès mental de ces personnes de proche,
          leurs portant accompagnement. 
        </p>
        <p>
          Et un jour peut être, le gouvernement lui aussi prendra en considération la terrible condition
          de vie de ces gens, et montrera au Liban, un peu d'humanité.
        </p>
      </div>
    </div>
  );
};

export default About;

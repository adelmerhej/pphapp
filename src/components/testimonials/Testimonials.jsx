import React, { useRef } from "react";
import "./Testimonials.css";
import BackIcon from "../../assets/backIcon.png";
import NextIcon from "../../assets/nextIcon.png";
import User1 from "../../assets/user1.png";
import User2 from "../../assets/user2.png";
import User3 from "../../assets/user3.png";
import User4 from "../../assets/user4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideForeward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials" id='testimonials'>
      <img
        className="back-icon"
        src={BackIcon}
        alt=""
        onClick={slideBackward}
      />
      <img
        className="next-icon"
        src={NextIcon}
        alt=""
        onClick={slideForeward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={User1} alt="" />
                <div>
                  <h3>Maé</h3>
                  <span>Paris, France</span>
                </div>
              </div>
              <p>
                « Avant de rencontrer la PPH, je n’avais plus d’espoir. Personne
                ne croyait en moi, sauf eux. Ils m’ont écouté, ils m’ont suivi
                même après ma sortie, quand tout le monde m’avait oublié. Grâce
                à leur accompagnement, j’ai pu reconstruire ma vie petit à
                petit. Ils m’ont traité comme un être humain, pas comme un
                criminel. »
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={User2} alt="" />
                <div>
                  <h3>Alix</h3>
                  <span>Beirut, Lebanon</span>
                </div>
              </div>
              <p>
                « Chaque histoire que j'entends me rappelle que personne ne naît
                mauvais. Nos prisonniers sont le reflet de notre société,
                abandonnés par un système qui les condamne sans les comprendre.
                Avec la PPH, nous offrons un espace d'écoute, de dignité et
                surtout, d'humanité. »
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={User3} alt="" />
                <div>
                  <h3>Andréa</h3>
                  <span>Tyre, Lebnaon</span>
                </div>
              </div>
              <p>
                « Quand mon frère a été incarcéré, c’est comme si toute la
                famille avait été punie. La PPH a été la seule lumière pendant
                cette période sombre. Ils nous ont soutenus, nous ont guidés, et
                surtout, ils ont cru en la possibilité du changement. »
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={User4} alt="" />
                <div>
                  <h3>Charlie</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                « Rejoindre la PPH a changé ma vision de la justice. J’ai
                compris que l’accompagnement et l’empathie font plus pour la
                sécurité que la punition. Chaque personne suivie est une preuve
                vivante que la réhabilitation est possible. »
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

import React from "react";
import "./Contact.css";
import MsgIcon from '../../assets/msg-icon.png'
import MailIcon from '../../assets/email-icon.png'
import PhoneIcon from '../../assets/phone-icon.png'
import LocationIcon from '../../assets/location-icon.png'
import WhiteArrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "97bcae6f-7b2f-4cb3-8c78-55fc865a5694");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className="contacts" id="contacts">
      <div className="contact">
        <div className="contact-col">
          <h3>Envoyez-nous un message <img src={MsgIcon} alt="" /></h3>
          <p>
            N'hésitez pas à nous contacter via le formulaire de contact ou à
            consulter nos coordonnées ci-dessous. Vos commentaires, questions et
            suggestions sont importants pour nous, car nous nous efforçons
            d'offrir un service exceptionnel à notre communauté universitaire.
          </p>
            <ul>
                <li><img src={MailIcon} alt="" />contact@pph.com.lb</li>
                <li><img src={PhoneIcon} alt="" />+961 1 123 456</li>
                <li><img src={LocationIcon} alt="" />Gemayze area - Pasteur street - West End 33 building<br/>Beirut - Lebanon</li>
            </ul>
        </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Full Name</label>
            <input type="text" name="name" placeholder="enter your name" required />
            <label>Phone number</label>
            <input type="tel" name="phone" placeholder="enter your mobile number" required />
            <label>Email address</label>
            <input type="text" name="email" placeholder="enter your email" required />
            <label>Write your messages here</label>
            <textarea name="message" placeholder="enter your message here" rows='10' required></textarea>
            <button type="submit" className="btn dark-btn">Submit Now<img src={WhiteArrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
    </div>
  );
};

export default Contact;

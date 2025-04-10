import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo_w.png'
import { Link } from 'react-scroll';
import MenuIcon from '../../assets/burguer_icon.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  }, [sticky])

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  } 

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img className='logo' src={Logo} alt="PPH Logo" />
        <ul className={mobileMenu? '' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}> Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Programme</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>À propos</Link></li>
            <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Témoignages</Link></li>
            <li><Link to='contacts' smooth={true} offset={-260} duration={500} className='btn'>Contactez-nous</Link></li>
        </ul>
        <img src={MenuIcon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
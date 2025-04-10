import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
        <p><div>©{(new Date().getFullYear())} Vision^ All rights reserved.</div></p>
        <ul>
            <li><a href="/">Terms of services</a> </li>
            <li><a href="/">Privacy Policy</a> </li>
        </ul>
    </div>
  )
}

export default Footer
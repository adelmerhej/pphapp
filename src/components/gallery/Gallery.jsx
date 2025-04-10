import React from 'react'
import './Gallery.css'

import Gallery1 from '../../assets/gallery-1.png'
import Gallery2 from '../../assets/gallery-2.png'
import Gallery3 from '../../assets/gallery-3.png'
import Gallery4 from '../../assets/gallery-4.png'
import WhiteArrow from '../../assets/white-arrow.png'

const Gallery = () => {
  return (
    <div className='galleries' id='gallery'>
        <div className="gallery">
            <img src={Gallery1} alt="" />
            <img src={Gallery2} alt="" />
            <img src={Gallery3} alt="" />
            <img src={Gallery4} alt="" />
        </div>
        <button className="btn dark-btn">Voir plus ici <img src={WhiteArrow} alt="" /></button>
    </div>
  )
}

export default Gallery
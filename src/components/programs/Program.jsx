import React from 'react'
import './Program.css'
import Program1 from '../../assets/program-1.png'
import Program2 from '../../assets/program-2.png'
import Program3 from '../../assets/program-3.png'
import ProgramIcon1 from '../../assets/ProgramIcon1.png'
import ProgramIcon2 from '../../assets/ProgramIcon2.png'
import ProgramIcon3 from '../../assets/ProgramIcon3.png'

const Program = () => {
  return (
   
      <div className='programs' id='program' >
          <div className="program">
              <img src={Program1} alt="" />
              <div className="caption">
                <img src={ProgramIcon1} alt="" />
                <p>Thérapie par le théâtre en prison</p>
              </div>
          </div>
          <div className="program">
              <img src={Program2} alt="" />
              <div className="caption">
                <img src={ProgramIcon2} alt="" />
                <p>Donner du pouvoir aux femmes hors de prison</p>
              </div>
          </div>
          <div className="program">
              <img src={Program3} alt="" />
              <div className="caption">
                <img src={ProgramIcon3} alt="" />
                <p>Réduire l'incarcération inutile</p>
              </div>
          </div>
      </div>
    
  )
}

export default Program
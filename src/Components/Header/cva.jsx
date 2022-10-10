import React from 'react'
import CV from '../../assets/cv - Ajie_Salahudin_Prima-resume.PDF'

const cva = () => {
  return (
    <div className='cva'>
        <a href={CV} download className='btn'>Download My CV</a>
    </div>
  )
}

export default cva
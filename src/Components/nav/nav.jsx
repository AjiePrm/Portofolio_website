import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {BiUserCircle} from 'react-icons/bi'
import {FaBookDead} from 'react-icons/fa'
import {GoProject} from 'react-icons/go'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='/#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active':''}><FaHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><BiUserCircle/></a>
      <a href='#experiences' onClick={() => setActiveNav('#experiences')} className={activeNav === '#experiences' ? 'active':''}><FaBookDead/></a>
      <a href='#Project' onClick={() => setActiveNav('#Project')} className={activeNav === '#Project' ? 'active':''}><GoProject/></a>
    </nav>
  )
}

export default Nav
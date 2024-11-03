import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiCodeAlt} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" title="HOME" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" title="ABOUT" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" title="EXPERIENCE" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiCodeAlt/></a>
      <a href="#portfolio" title="PORTFOLIO" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiBook/></a>
      <a href="#contact" title="CONTACT" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageRoundedDots/></a>
    </nav>
  )
}

export default Nav

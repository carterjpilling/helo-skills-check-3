import React from 'react'
import '../css/Nav.css'
import { Link } from 'react-router-dom'

import heloLogo from '../../assets/helo_logo.png'
import homeLogo from '../../assets/home_logo.png'
import newLogo from '../../assets/new_logo.png'
import logoutLogo from '../../assets/shut_down.png'



const Nav = props => {
  return (
    <div className='navbar-container'>
      <nav className='navbar-button-container'>
        <div className='profile-pic'></div>
        <Link to='/dashboard'><img className='home-logo' src={homeLogo} /></Link>
        <Link to='/new'><img className='new-logo' src={newLogo} /></Link>
        <Link to='/'><img className='log-out-button' src={logoutLogo} /> </Link>
      </nav>
    </div>
  )
}

export default Nav
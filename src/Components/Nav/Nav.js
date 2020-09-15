import React from 'react'
import '../css/Nav.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import homeLogo from '../../assets/home_logo.png'
import newLogo from '../../assets/new_logo.png'
import logoutLogo from '../../assets/shut_down.png'



const Nav = props => {
  console.log(props)
  return (
    <div className='navbar-container'>
      <nav className='navbar-button-container'>
        <div className='profile-pic' src={`${props.profile_pic}`}></div>
        <p>{props.username}</p>
        <Link to='/dashboard'><img className='home-logo' src={homeLogo} alt='home_logo' /></Link>
        <Link to='/new'><img className='new-logo' src={newLogo} alt='new_logo' /></Link>
        <Link to='/'><img className='log-out-button' src={logoutLogo} alt='logout_logo' /> </Link>
      </nav>
    </div>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Nav)
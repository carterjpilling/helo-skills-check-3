import React from 'react'
import '../css/Nav.css'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import homeLogo from '../../assets/home_logo.png'
import newLogo from '../../assets/new_logo.png'
import logoutLogo from '../../assets/shut_down.png'



const Nav = props => {
  // console.log(props)
  if (props.location.pathname !== '/') {
    return (
      <div className='navbar-container'>
        <nav className='navbar-button-container'>
          <img className='profile-pic' src={`${props.profile_pic}`} alt={props.profile_pic} />
          <p>{props.username}</p>
          <Link to='/dashboard'><img className='home-logo' src={homeLogo} alt='home_logo' /></Link>
          <Link to='/new'><img className='new-logo' src={newLogo} alt='new_logo' /></Link>
          <Link to='/'><img className='log-out-button' src={logoutLogo} alt='logout_logo' /> </Link>
        </nav>
      </div>
    )
  } else {
    return null
  }
}

function mapStateToProps(state) {
  return state
}

export default withRouter(connect(mapStateToProps)(Nav))
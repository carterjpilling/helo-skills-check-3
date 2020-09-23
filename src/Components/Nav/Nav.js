import React, { Component } from 'react'
import '../css/Nav.css'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import homeLogo from '../../assets/home_logo.png'
import newLogo from '../../assets/new_logo.png'
import logoutLogo from '../../assets/shut_down.png'
import { loginUser, logoutUser } from '../../redux/src/reducer'
import axios from 'axios'



class Nav extends Component {
  constructor() {
    super()

    this.logoutUser = this.logoutUser.bind(this)
  }

  componentDidMount() {
    console.log(this.props)
    axios.get('/api/auth/me')
      .then(res => {
        this.props.loginUser(res.data)
      })
      .catch(() => { this.props.history.push('/') })
  }

  logoutUser() {
    console.log('hit logout')
    axios.post('/api/auth/logout')
      .then(() => this.props.logoutUser())

  }
  // console.log(props)


  render() {
    if (this.props.location.pathname !== '/') {
      return (
        <div className='navbar-container'>
          <nav className='navbar-button-container'>
            <img className='profile-pic' src={`${this.props.profile_pic}`} alt={this.props.profile_pic} />
            <p>{this.props.username}</p>
            <Link to='/dashboard'><img className='home-logo' src={homeLogo} alt='home_logo' /></Link>
            <Link to='/new'><img className='new-logo' src={newLogo} alt='new_logo' /></Link>
            <Link to='/' onClick={this.logoutUser} ><img className='log-out-button' src={logoutLogo} alt='logout_logo' /> </Link>
          </nav>
        </div>
      )
    } else {
      return null
    }
  }
}


const mapStateToProps = (reduxState) => reduxState


export default withRouter(connect(mapStateToProps, { loginUser, logoutUser })(Nav))
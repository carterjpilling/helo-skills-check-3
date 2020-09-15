import React, { Component } from 'react'
import '../css/Auth.css'
import heloLogo from '../../assets/helo_logo.png'

class Auth extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div className='background-container'>
        <div className="auth-container">
          <img src={heloLogo} />
          <p className='helo'>Helo</p>
          <form className='form-input-container'>
            <div className="username-input-box">
              UserName: <input />
            </div>
            <div>
              Password: <input />
            </div>
          </form>
          <div className='auth-button-container'>
            <button className="auth-buttons">Login</button>
            <button className="auth-buttons">Register</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Auth
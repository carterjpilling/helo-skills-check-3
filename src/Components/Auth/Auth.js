import React, { Component } from 'react'
import '../css/Auth.css'
import heloLogo from '../../assets/helo_logo.png'
import { loginUser } from '../../redux/src/reducer'
import { connect } from 'react-redux'
import axios from 'axios'

class Auth extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
    this.handleRegister = this.handleRegister.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.name
    })
  }

  handleLogin = () => {
    const { username, password } = this.state
    axios
      .post('/api/auth/login', { username, password })
      .then((res) => {
        this.props.loginUser(res.data)
        this.props.history.push('/dashboard')
      })
  }

  handleRegister = () => {
    // const { username, password } = this.state
    axios
      .post('/api/auth/register', this.state)
      .then((res) => {
        this.props.loginUser(res.data)
        this.props.history.push('/dashboard')
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  render() {
    return (
      <div className='background-container'>
        <div className="auth-container">
          <img src={heloLogo} alt='helo_logo' />
          <p className='helo'>Helo</p>
          <form className='form-input-container'>
            <div className="username-input-box">
              UserName: <input
                type='username'
                maxLength='20'
                name='username'
                onChange={(e) => {
                  this.handleInput(e)
                }}
              />
            </div>
            <div>
              Password: <input
                type='password'
                maxLength='20'
                name='password'
                onChange={(e) => {
                  this.handleInput(e)
                }}
              />
            </div>
          </form>
          <div className='auth-button-container'>
            <button className="auth-buttons" onClick={() => { this.handleLogin() }}>Login</button>
            <button className="auth-buttons" onClick={() => { this.handleRegister() }}>Register</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { loginUser })(Auth)
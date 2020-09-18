import React, { Component } from 'react'
import '../css/Form.css'
import axios from 'axios'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      img: '',
      content: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    axios.post(`/api/posts/`, this.state)
      .then(res => this.props.history.push('/dashboard'))
  }
  render() {
    return (
      <div className='form-background'>
        <div className='form-container'>
          <div className='form-page-input-container'>
            <h1 className='h1-post'>New Post</h1>

            <div className='form-title-container'>
              Title:
              <input value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
            </div>
            {this.state.img ?
              <img src={this.state.img} alt='this.state.img' /> :
              <img src={'https://th.bing.com/th/id/OIP.OMoenU-E_IMw77OUoW_dcgHaEh?w=265&h=180&c=7&o=5&pid=1.7'} className='form-img-container' alt='null_picture' />}
            <div className='form-title-container'>
              Img Url:
             <input value={this.state.img} onChange={e => this.setState({ img: e.target.value })} />
            </div>
            <div className='form-title-container'>
              Content:
            <textarea className='content-input-container' value={this.state.content} onChange={e => this.setState({ content: e.target.value })} />
            </div>
            <button onClick={this.handleSubmit} className='form-submit-button'>Submit</button>
          </div>
        </div>
      </div >
    )
  }
}


export default Form

// {this.state.product_img
//   ? <img src={this.state.product_img}></img>
//   : <div className="default-logo"></div>}
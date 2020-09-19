import React, { Component } from 'react'
import axios from 'axios'
import '../css/Post.css'

class Post extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      img: '',
      content: '',
      author_id: '',
      profile_pic: ''
    }
  }

  componentDidMount() {
    axios.get(`/api/post/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data)
        this.setState(
          res.data[0]
        )
      })
  }

  render() {

    return (
      <div className="post-container-page">
        <div className='post-container-box'>
          <div className='post-header'>
            <h1>{this.state.title}</h1>
            <div className='title-img-container'>
              <p>By: {this.state.author_id}</p>
              <img className='post-profile-pic' src={this.state.profile_pic} alt={this.state.profile_pic} />
            </div>
          </div>
          <div className='img-content-container'>
            {this.state.img ?
              <img className='post-img-container' src={this.state.img} alt={this.state.img} /> :
              <img src={'https://th.bing.com/th/id/OIP.OMoenU-E_IMw77OUoW_dcgHaEh?w=265&h=180&c=7&o=5&pid=1.7'} className='post-img-container' alt='null_picture' />}
            <p className='post-content-container'>{this.state.content}</p>
          </div>

        </div>
      </div>
    )
  }
}
export default Post
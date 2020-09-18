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
      <div className="post-container-page"> POSTS {this.state.title}</div>
    )
  }
}
export default Post
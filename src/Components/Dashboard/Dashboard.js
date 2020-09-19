import React, { Component } from 'react'
import '../css/Dashboard.css'
import { withRouter, Link } from 'react-router-dom'
import searchButton from '../../assets/search_button.png'
import Axios from 'axios'

class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      posts: [],
      search: '',
      loading: true

    }
  }


  // componentDidMount() {
  //   if (!this.props.isLoggedIn) {
  //     this.props.getUser().catch((err) => {
  //       this.props.history.push('/')
  //     })
  //   }
  //   this.getPosts()
  // }


  componentDidMount() {
    this.getPosts()
  }

  getPosts = () => {
    Axios.get('/api/posts').then((res) => {
      this.setState({
        posts: res.data
      })
    })
  }

  render() {
    const posts = this.state.posts.map(element => {
      // const {content} = element RIGHT
      return (
        <Link to={`/api/posts/${element.id}`} key={element.id} className="zeldalink">
          <div className="individual-post-container" >
            <div >
              {element.content}
            </div>
            <div>
              by: {element.author_id}
              {/* {element.title} */}
              {/* {element.img} */}
              <img className="post-pic" src={element.profile_pic} alt={element.author_id} />
            </div>
          </div>
        </Link>
      )
    })
    // const { content } = posts WRONG
    return (
      <div className='dashboard-container'>
        <div className='dash-nav-container'>
          <div className='dashboard-search-container'>
            <input placeholder='Search by Title'></input>
            <img className='dashboard-search-button' src={searchButton} />
            <button className='dashboard-reset-button' >Reset</button>
          </div>
          <div className='myposts-box'>
            My Posts
          <input type="checkbox" />
          </div>
        </div>
        <div className='post-container'>
          {posts}
        </div>
      </div>
    )
  }
}

export default Dashboard
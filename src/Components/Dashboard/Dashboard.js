import React, { Component } from 'react'
import '../css/Dashboard.css'
import { withRouter, Link } from 'react-router-dom'
import searchButton from '../../assets/search_button.png'
import axios from 'axios'
import { connect } from 'react-redux'

class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      posts: [],
      search: '',
      loading: true,
      userPosts: true

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
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    this.props.isLoggedIn &&
      this.getPosts()

  }


  //if search is true then send 
  //This means you can provide arguments if you want, if not they will default to state values. 
  //Dont need id now because its already on the back.
  getPosts = (userPosts = this.state.userPosts, search = this.state.search) => {
    axios.get(`/api/posts?userPosts=${userPosts}&search=${search}`)
      .then((res) => {
        this.setState({
          posts: res.data
        })
      })
  }

  toggleUserPosts = () => {
    this.setState({
      userPosts: !this.state.userPosts
    })
  }
  //All of this is triggering at the same time. What I did was make arugments for my getPosts and then passed in the 'reset values' of state when calling getPosts below. 
  resetState = () => {
    this.setState({

      search: '',
      userPosts: true
    })
    this.getPosts(true, '')
  }
  render() {
    const { search } = this.state
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
            <input placeholder='Search by Title' value={search} name='search' onChange={(e) => this.handleInput(e)}></input>
            <img className='dashboard-search-button' src={searchButton} onClick={() => this.getPosts()} alt='button' />
            <button className='dashboard-reset-button' onClick={() => this.resetState()}>Reset</button>
          </div>
          <div className='myposts-box'>
            My Posts
          <input type="checkbox" onChange={() => this.toggleUserPosts()} checked={this.state.userPosts} />
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
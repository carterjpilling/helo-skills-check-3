import React, { Component } from 'react'
import '../css/Dashboard.css'
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
        <div className="individual-post-container" key={element.id}>
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
      )
    })
    // const { content } = posts WRONG
    return (
      <div className='dashboard-container'>
        <div className='dash-nav-container'>
          <input></input>
          <button>Search</button>
          <button>Reset</button>
          <div className='myposts-box'>
            My Posts
          <input type="checkbox" />
          </div>
        </div>
        <div className='post-container'>
          {/* <div className='all-post-container'> */}

          {posts}
          {/* </div> */}


        </div>
      </div>
    )
  }
}

export default Dashboard
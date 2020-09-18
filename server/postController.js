const getAllPosts = async (db) => {
  const posts = await db.get_posts()
  return posts
}

module.exports = {
  getPosts: async (req, res) => {
    const db = req.app.get('db')
    const posts = await getAllPosts(db)
    res.status(200).send(posts)
  },
  addPost: async (req, res) => {
    const db = req.app.get('db')
    const { id } = req.session.user

    // if(!req.session)

    const { title, img, content } = req.body

    await db.add_post([id, title, img, content])

    const posts = await getAllPosts(db)
    res.status(200).send(posts)
  },
  deletePost: async (req, res) => {

  },
  getPost: async (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params

    db.get_post(+id)
      .then(post => res.status(200).send(post))
      .catch(err => res.status(500).send(err))
  }
}
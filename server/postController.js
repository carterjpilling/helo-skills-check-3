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

    const { title, img, content } = req.body

    await db.add_post([id, title, img, content])

    const posts = await getAllPosts(db)
    res.status(200).send(posts)
  },
  deletePost: async (req, res) => {

  }
}
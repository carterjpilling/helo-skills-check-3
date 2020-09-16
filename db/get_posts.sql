SELECT p.author_id, p.title, p.img, p.content
FROM posts p
-- JOIN users u ON u.id = p.author_id
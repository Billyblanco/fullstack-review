SELECT posts.*, users.name
FROM posts 
JOIN users ON posts.user_id = users.id

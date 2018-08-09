SELECT posts.*, users.name as author
FROM posts 
JOIN users ON posts.user_id = users.id

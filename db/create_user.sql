INSERT INTO users (auth_id, username) 
VALUES ($1, $2)

RETURNING *;
update cart 
set quantity = $2
where cart_id = $1

returning *;
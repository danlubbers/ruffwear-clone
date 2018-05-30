DELETE FROM cart
WHERE user_id = $1;

select * from cart
WHERE user_id = $1;
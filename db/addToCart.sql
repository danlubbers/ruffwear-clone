INSERT INTO cart (user_id, product_id, quantity, size, color) 
VALUES ($1, $2, $3, $4, $5);

select * from cart
join products on products.product_id = cart.product_id
where user_id = $1
order by cart_id;

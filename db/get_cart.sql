select * from cart
join products on products.product_id = cart.product_id
where user_id = $1
order by cart_id;

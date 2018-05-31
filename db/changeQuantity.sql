update cart 
set quantity = $1
where cart_id = $2;

select * from cart
join products on products.product_id = cart.product_id
where user_id = $3
order by cart_id;
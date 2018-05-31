delete from cart 
where cart_id = $1;

select * from cart
join products on products.product_id = cart.product_id
where user_id = $2
order by cart_id;

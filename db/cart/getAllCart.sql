select * from products
join cart on cart.product_id = products.product_id
where user_id = $1
order by cart_id;

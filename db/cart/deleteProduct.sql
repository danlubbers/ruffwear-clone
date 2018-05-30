delete from cart 
where product_id = $1;

select * from cart;
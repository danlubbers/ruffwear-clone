insert into cart(user_id, product_id, size, color_img_index)
select $1, $2, $4, $5
Where not exists(Select * from cart where user_id = $1 AND product_id = $2 AND size = $4 AND color_img_index = $5);

update cart
set quantity = quantity + $3
where user_id = $1 AND product_id = $2 AND size = $4 AND color_img_index = $5;

select cart_id, p.product_id, quantity, size, color_img_index, title, price, colors, imgs, thumbnail from cart c
join products p on p.product_id = c.product_id
where user_id = $1
order by cart_id;

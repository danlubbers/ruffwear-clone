update cart 
set quantity = $1
where cart_id = $2;

select cart_id, p.product_id, quantity, size, color_img_index, title, price, colors, imgs, thumbnail from cart c
join products p on p.product_id = c.product_id
where user_id = $3
order by cart_id;
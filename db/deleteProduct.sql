delete from cart 
where cart_id = $1;

select cart_id, p.product_id, quantity, size, color_img_index, title, price, colors, imgs, thumbnail from cart c
join products p on p.product_id = c.product_id
where user_id = $1
order by cart_id;
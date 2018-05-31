INSERT INTO products(category, title, subtitle, description , price , sizes , colors, imgs, thumbnail)
VALUES( 'Category name',
'Product Name ',
'subtitle'
'Description goes here',
99.99,
ARRAY['X-Small', 'Small', 'Medium', 'Large'],
ARRAY[array['Color1 Name', 'rgb(192, 55, 226)'], array['color2 name', 'rgb(77, 105, 230)'], array['color3name', 'rgb(230, 146, 77)']],
ARRAY['http://img1', 'http://img2', 'http://img3'],
'http://thumbnail');
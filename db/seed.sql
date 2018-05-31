create table users (
    user_id serial primary key,
    auth_id varchar(45),
    username varchar(45)
);

create table products (
    product_id serial primary key,
    category text,
    title text,
    subtitle text,
    description text,
    price decimal,
    sizes text[],
    colors text[][],
    imgs text[],
    thumbnail text
);

create table cart (
    cart_id serial primary key,
    user_id int references users(user_id),
    product_id int references products(product_id),
    quantity integer default 1,
    size text,
    color text
);



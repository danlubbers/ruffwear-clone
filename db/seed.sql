create table users (
    user_id serial primary key,
    auth_id varchar(45),
    username varchar(45)
);

create table products (
    product_id serial primary key,
    category text,
    title text,
    description text,
    price decimal,
    color text,
    img text,
    large_img text
);

create table sizes(
    size text
);

create table cart (
    cart_id serial primary key,
    user_id integer,
    product_id integer,
    quantity integer default 1
);




create table users (    
    id SERIAL PRIMARY KEY,    
    username text,    
    auth_id text,    
    email text,
    phone int,
    address varchar(160)
)

create table products (    
    id SERIAL PRIMARY KEY,    
    title TEXT,    
    price FLOAT,    
    product_img TEXT,
    type TEXT,
    attr_id INTEGER REFERENCES attributes (id)
)

create table attributes (    
    id SERIAL PRIMARY KEY,    
    size text,    
    color text
)

create table cart (
    id serial PRIMARY KEY,
    product_id int REFERENCES products(id),
    user_id int REFERENCES users(id),
    quantity int 
)


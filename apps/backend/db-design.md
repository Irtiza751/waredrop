```sql
////////////////////////////////////////////////
///////////// Waredrop DB Design ///////////////
////////////////////////////////////////////////

// Users table to store both buyers and sellers
Table users {
  id integer [pk, increment]
  email varchar [unique, not null]
  password_hash varchar [not null]
  first_name varchar
  last_name varchar
  phone varchar
  created_at timestamp [default: `now()`]
  updated_at timestamp
  is_seller boolean [default: false]
}

// User addresses for shipping and billing
Table addresses {
  id integer [pk, increment]
  user_id integer [ref: > users.id]
  address_type varchar [note: 'shipping/billing']
  street_address varchar
  city varchar
  state varchar
  postal_code varchar
  country varchar
  is_default boolean [default: false]
  created_at timestamp [default: `now()`]
}

// Product categories
Table categories {
  id integer [pk, increment]
  name varchar [not null]
  description text
  parent_id integer [ref: > categories.id]
  created_at timestamp [default: `now()`]
}

// Products table
Table products {
  id integer [pk, increment]
  seller_id integer [ref: > users.id]
  category_id integer [ref: > categories.id]
  name varchar [not null]
  description text
  price decimal [not null]
  stock_quantity integer [default: 0]
  status varchar [note: 'active/inactive/draft']
  created_at timestamp [default: `now()`]
  updated_at timestamp
}

// Product images
Table product_images {
  id integer [pk, increment]
  product_id integer [ref: > products.id]
  image_url varchar [not null]
  is_primary boolean [default: false]
  display_order integer
  created_at timestamp [default: `now()`]
}

// Shopping cart
Table cart_items {
  id integer [pk, increment]
  user_id integer [ref: > users.id]
  product_id integer [ref: > products.id]
  quantity integer [not null]
  created_at timestamp [default: `now()`]
  updated_at timestamp
}

// Orders
Table orders {
  id integer [pk, increment]
  user_id integer [ref: > users.id]
  status varchar [note: 'pending/processing/shipped/delivered/cancelled']
  shipping_address_id integer [ref: > addresses.id]
  billing_address_id integer [ref: > addresses.id]
  total_amount decimal [not null]
  shipping_fee decimal
  tax_amount decimal
  created_at timestamp [default: `now()`]
  updated_at timestamp
}

// Order items
Table order_items {
  id integer [pk, increment]
  order_id integer [ref: > orders.id]
  product_id integer [ref: > products.id]
  quantity integer [not null]
  unit_price decimal [not null]
  subtotal decimal [not null]
  created_at timestamp [default: `now()`]
}

// Reviews and ratings
Table reviews {
  id integer [pk, increment]
  user_id integer [ref: > users.id]
  product_id integer [ref: > products.id]
  order_item_id integer [ref: > order_items.id]
  rating integer [note: '1 to 5']
  comment text
  created_at timestamp [default: `now()`]
  updated_at timestamp
}
```

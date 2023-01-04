import React from "react";
import { Product } from "../../graphql/products";

const ItemData = ({
  imageUrl,
  price,
  title,
}: Pick<Product, "imageUrl" | "price" | "title">) => (
  <>
    <img className="cart-item__image" src={imageUrl} />
    <div className="cart-item__title">{title}</div>
    <div className="cart-item__price">{price}</div>
  </>
);

export default ItemData;

import React from "react";
import { Product } from "../../graphql/products";

const ProductDetail = ({
  item: { imageUrl, price, title, description },
}: {
  item: Product;
}) => {
  return (
    <div className="product-detail">
      <p className="product-item__category">{description}</p>
      <p className="product-item__title">{title}</p>
      <img src={imageUrl} className="product-item__image" />
      <span>${price}</span>
    </div>
  );
};

export default ProductDetail;

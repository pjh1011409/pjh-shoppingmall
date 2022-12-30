import { Product } from "../../graphql/products";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { graphqlFetcher } from "../../queryClient";
import { ADD_CART } from "../../graphql/cart";
import React from "react";

const ProductItem = ({ id, imageUrl, price, title }: Product) => {
  const { mutate: addCart } = useMutation((id: string) =>
    graphqlFetcher(ADD_CART, { id })
  );

  return (
    <>
      <li className="product-item">
        <Link to={`/products/${id}`}>
          <img src={imageUrl} className="product-item__image" />
          <p className="product-item__title">{title}</p>
          <span>${price}</span>
        </Link>
        <button className="product-item__add-cart" onClick={() => addCart(id)}>
          담기
        </button>
      </li>
    </>
  );
};

export default ProductItem;

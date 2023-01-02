import { Product } from "../../graphql/products";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { graphqlFetcher } from "../../queryClient";
import { ADD_CART } from "../../graphql/cart";
import React from "react";
import { Button, Icon } from "semantic-ui-react";

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
          <span className="product-item__price">${price}</span>
        </Link>

        <Button
          animated="vertical"
          onClick={() => addCart(id)}
          className="product-item__cart"
        >
          <Button.Content hidden>Cart</Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
      </li>
    </>
  );
};

export default ProductItem;

import { Product } from "../../graphql/products";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { graphqlFetcher } from "../../queryClient";
import { ADD_CART } from "../../graphql/cart";
import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import AlertModal from "./alertModal";
import { useRecoilState } from "recoil";
import { cartItemCount } from "../../recoils/cart";

const ProductItem = ({ id, imageUrl, price, title }: Product) => {
  const [modalShow, setModalShow] = useState(false);
  const [countCartItem, setCountCartItem] = useRecoilState(cartItemCount);

  const { mutate: addCart } = useMutation((id: string) =>
    graphqlFetcher(ADD_CART, { id })
  );

  const clickCart = () => {
    addCart(id);
    setModalShow(true);
    setCountCartItem((prev) => (prev += 1));
    setTimeout(() => setModalShow(false), 1500);
  };

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
          onClick={clickCart}
          style={{ backgroundColor: "white", marginBottom: "5px" }}
          className="product-item__cart"
        >
          <Button.Content hidden>Cart</Button.Content>
          <Button.Content visible>
            <Icon name="shop" style={{ fontSize: "17px" }} />
          </Button.Content>
        </Button>
        <AlertModal show={modalShow} />
      </li>
    </>
  );
};

export default ProductItem;

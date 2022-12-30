import { useQuery } from "react-query";
import { CartType, GET_CART } from "../../graphql/cart";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import CartList from "../../components/cart/list";
import React from "react";

const Cart = () => {
  const { data } = useQuery(QueryKeys.CART, () => graphqlFetcher(GET_CART), {
    staleTime: 0,
    cacheTime: 1000,
  });
  const cartItems = (data?.cart || []) as CartType[];

  if (!cartItems.length) return <div>장바구니가 비었어요</div>;

  return <CartList items={cartItems} />;
};

export default Cart;

import { useQuery } from "react-query";
import { CartType, GET_CART } from "../../graphql/cart";
import { getClient, graphqlFetcher, QueryKeys } from "../../queryClient";
import CartList from "../../components/cart/list";
import React from "react";
import Container from "@mui/material/Container";

const Cart = () => {
  const queryClient = getClient();

  const { data } = useQuery(QueryKeys.CART, () => graphqlFetcher(GET_CART), {
    staleTime: 0,
    cacheTime: 1000,

    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.CART, {
        exact: false,
        refetchInactive: true,
      });
    },
  });
  const cartItems = (data?.cart || []) as CartType[];

  if (!cartItems.length) return <div>장바구니가 비었어요</div>;

  return (
    <Container maxWidth="md">
      <CartList items={cartItems} />
    </Container>
  );
};

export default Cart;

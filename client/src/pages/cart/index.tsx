import { useQuery } from "react-query";
import { CartType, GET_CART } from "../../graphql/cart";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import CartList from "../../components/cart/list";
import React from "react";
import Container from "@mui/material/Container";
import { CartResult } from "../../components/errorResult/errorResult";

const Cart = () => {
  const { data } = useQuery(QueryKeys.CART, () => graphqlFetcher(GET_CART), {
    staleTime: 0,
    cacheTime: 1000,
  });
  const cartItems = (data?.cart || []) as CartType[];

  if (!cartItems.length) return <CartResult />;

  return (
    <Container maxWidth="md">
      <CartList items={cartItems} />
    </Container>
  );
};

export default Cart;

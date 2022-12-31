import React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useQuery } from "react-query";
import { CartType, GET_CART } from "../../graphql/cart";
import { getClient, graphqlFetcher, QueryKeys } from "../../queryClient";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const CartIcon = () => {
  const queryClient = getClient();

  const { data } = useQuery(QueryKeys.CART, () => graphqlFetcher(GET_CART), {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.CART, {
        exact: false,
        refetchInactive: true,
      });
    },
  });
  const cartItems = (data?.cart || []) as CartType[];

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cartItems.length} color="secondary">
        <ShoppingBasketIcon style={{ fontSize: "35px" }} />
      </StyledBadge>
    </IconButton>
  );
};

export default CartIcon;

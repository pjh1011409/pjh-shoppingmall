import React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useRecoilValue } from "recoil";
import { cartItemCount } from "../../recoils/cart";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const CartIcon = () => {
  const itemCount = useRecoilValue(cartItemCount);

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={itemCount} color="secondary">
        <ShoppingBasketIcon style={{ fontSize: "35px" }} />
      </StyledBadge>
    </IconButton>
  );
};

export default CartIcon;

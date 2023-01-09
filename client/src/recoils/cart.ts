import { atom } from "recoil";
import { CartType } from "../graphql/cart";

export const checkedCartState = atom<CartType[]>({
  key: "cartState",
  default: [],
});

export const cartItemCount = atom<number>({
  key: "cartCount",
  default: 0,
});

import React from "react";
import { SyntheticEvent } from "react";
import { useRecoilValue } from "recoil";
import { checkedCartState } from "../../recoils/cart";
import ItemData from "../cart/itemData";
import PayList from "./payList";

const WillPay = ({
  submitTitle,
  handleSubmit,
}: {
  submitTitle: string;
  handleSubmit: (e: SyntheticEvent) => void;
}) => {
  const checkedItems = useRecoilValue(checkedCartState);
  const totalPrice = checkedItems.reduce(
    (res, { product: { price, createdAt }, amount }) => {
      if (createdAt) res += price * amount;
      return res;
    },
    0
  );

  return (
    <div className="cart-willpay">
      <PayList checkedItems={checkedItems} />
      <div className="finalPay">
        <div className="total">총 {totalPrice} 원</div>
        <button className="payBtn" onClick={handleSubmit}>
          {submitTitle}
        </button>
      </div>
    </div>
  );
};

export default WillPay;

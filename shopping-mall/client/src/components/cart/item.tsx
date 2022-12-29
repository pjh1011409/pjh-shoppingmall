import React, { ForwardedRef, forwardRef, SyntheticEvent } from "react";
import { useMutation } from "react-query";
import { getClient, graphqlFetcher, QueryKeys } from "../../queryClient";
import { CartType } from "../../graphql/cart";
import { UPDATE_CART, DELETE_CART } from "../../graphql/cart";
import ItemData from "./itemData";

const CartItem = (
  { id, product: { imageUrl, price, title, createdAt }, amount }: CartType,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const queryClient = getClient();
  const { mutate: updateCart } = useMutation(
    ({ id, amount }: { id: string; amount: number }) =>
      graphqlFetcher(UPDATE_CART, { id, amount }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.CART, {
          exact: false,
          refetchInactive: true,
        });
      },
    }
  );

  const { mutate: deleteCart } = useMutation(
    ({ id }: { id: string }) => graphqlFetcher(DELETE_CART, { id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.CART, {
          exact: false,
          refetchInactive: true,
        });
      },
    }
  );

  const handlerUpdateAmount = (e: SyntheticEvent) => {
    const amount = Number((e.target as HTMLInputElement).value);
    if (amount < 1) return;
    updateCart({ id, amount });
  };

  const handleDeleteItem = () => {
    deleteCart({ id });
  };
  return (
    <li className="cart-item">
      <input
        className="cart-item__checkbox"
        type="checkbox"
        name="select-item"
        ref={ref}
        data-id={id}
        disabled={!createdAt}
      />
      <ItemData imageUrl={imageUrl} price={price} title={title} />
      {!createdAt ? (
        <div>삭제된 상품입니다.</div>
      ) : (
        <input
          type="number"
          className="cart-item__amount"
          value={amount}
          onChange={handlerUpdateAmount}
          min={1}
        />
      )}

      <button
        className="cart-item__button"
        type="button"
        onClick={handleDeleteItem}
      >
        삭제
      </button>
    </li>
  );
};

export default forwardRef(CartItem);

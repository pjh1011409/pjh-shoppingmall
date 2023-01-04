import React, { ForwardedRef, forwardRef } from "react";
import { useMutation } from "react-query";
import { getClient, graphqlFetcher, QueryKeys } from "../../queryClient";
import { CartType } from "../../graphql/cart";
import { UPDATE_CART, DELETE_CART } from "../../graphql/cart";
import ItemData from "./itemData";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Badge, Button, Space } from "antd";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button as DeleteButton, Icon } from "semantic-ui-react";

const ButtonGroup = Button.Group;

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

  const handleDeleteItem = () => {
    deleteCart({ id });
  };

  const increase = () => {
    amount += 1;
    updateCart({ id, amount });
  };

  const decline = () => {
    if (amount === 1) return;
    amount -= 1;
    updateCart({ id, amount });
  };

  return (
    <li className="cart-item">
      <ItemData imageUrl={imageUrl} price={price} title={title} />

      {!createdAt ? (
        <div>삭제된 상품입니다.</div>
      ) : (
        <Space direction="vertical" className="productAmount">
          <Space size="large">
            <Badge count={amount}></Badge>
            <ButtonGroup>
              <Button onClick={decline} icon={<MinusOutlined />} />
              <Button onClick={increase} icon={<PlusOutlined />} />
            </ButtonGroup>
          </Space>
        </Space>
      )}
      <div className="checkDelete">
        <input
          className="itemCheckbox"
          type="checkbox"
          name="select-item"
          ref={ref}
          data-id={id}
          disabled={!createdAt}
        />

        <DeleteButton
          animated="vertical"
          onClick={handleDeleteItem}
          className="product-item__cart"
          style={{ float: "right" }}
        >
          <DeleteButton.Content hidden>Cart</DeleteButton.Content>
          <DeleteButton.Content visible>
            <DeleteIcon />
          </DeleteButton.Content>
        </DeleteButton>

        <IconButton
          aria-label="delete"
          size="large"
          onClick={handleDeleteItem}
          style={{ float: "right" }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </li>
  );
};

export default forwardRef(CartItem);

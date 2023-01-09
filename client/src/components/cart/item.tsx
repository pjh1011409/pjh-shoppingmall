import React, { ForwardedRef, forwardRef } from "react";
import { useMutation } from "react-query";
import { getClient, graphqlFetcher, QueryKeys } from "../../queryClient";
import { CartType } from "../../graphql/cart";
import { UPDATE_CART, DELETE_CART } from "../../graphql/cart";
import ItemData from "./itemData";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Badge, Button, Space } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button as DeleteButton } from "semantic-ui-react";

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
        queryClient.invalidateQueries(QueryKeys.CART);
      },
    }
  );

  const { mutate: deleteCart } = useMutation(
    ({ id }: { id: string }) => graphqlFetcher(DELETE_CART, { id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.CART);
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
            <Badge count={amount} style={{ backgroundColor: "#3c6b39" }} />
            <ButtonGroup>
              <Button onClick={decline} icon={<MinusOutlined />} />
              <Button onClick={increase} icon={<PlusOutlined />} />
            </ButtonGroup>
          </Space>
        </Space>
      )}
      <div className="checkDelete">
        <div className="toggleBtn2">
          <input
            type="checkbox"
            name="select-item"
            role="switch"
            ref={ref}
            data-id={id}
            disabled={!createdAt}
          />
        </div>

        <DeleteButton
          animated="vertical"
          onClick={handleDeleteItem}
          className="cart-item__cart"
          style={{ float: "right", backgroundColor: "white" }}
        >
          <DeleteButton.Content hidden>Delete</DeleteButton.Content>
          <DeleteButton.Content visible>
            <DeleteIcon />
          </DeleteButton.Content>
        </DeleteButton>
      </div>
    </li>
  );
};

export default forwardRef(CartItem);

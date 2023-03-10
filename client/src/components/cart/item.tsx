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
      onMutate: async ({ id, amount }) => {
        await queryClient.cancelQueries(QueryKeys.CART);
        const { cart: prevCart } = queryClient.getQueryData<{
          cart: CartType[];
        }>(QueryKeys.CART) || { cart: [] };
        if (!prevCart) return null;

        const targetIndex = prevCart.findIndex(
          (cartItem) => cartItem.id === id
        );
        if (targetIndex === undefined || targetIndex < 0) return prevCart;

        const newCart = [...prevCart];
        newCart.splice(targetIndex, 1, { ...newCart[targetIndex], amount });
        queryClient.setQueryData(QueryKeys.CART, { cart: newCart });
        return prevCart;
      },
      onSuccess: ({ updateCart }) => {
        const { cart: prevCart } = queryClient.getQueryData<{
          cart: CartType[];
        }>(QueryKeys.CART) || { cart: [] };
        const targetIndex = prevCart?.findIndex(
          (cartItem) => cartItem.id === updateCart.id
        );
        if (!prevCart || targetIndex === undefined || targetIndex < 0) return;

        const newCart = [...prevCart];
        newCart.splice(targetIndex, 1, updateCart);
        queryClient.setQueryData(QueryKeys.CART, { cart: newCart });
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
        <div>????????? ???????????????.</div>
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

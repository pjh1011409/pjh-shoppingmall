import React from "react";
import { SyntheticEvent } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import {
  DELETE_PRODUCT,
  MutableProduct,
  Product,
  UPDATE_PRODUCT,
} from "../../graphql/products";
import { getClient, graphqlFetcher, QueryKeys } from "../../queryClient";
import arrToObj from "../../util/arrToObj";
import { Button, Icon } from "semantic-ui-react";
import EditItem from "./editItem";

const AdminItem = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createdAt,
  isEditing,
  startEdit,
  doneEdit,
}: Product & {
  isEditing: boolean;
  startEdit: () => void;
  doneEdit: () => void;
}) => {
  const queryClient = getClient();
  const { mutate: updateProduct } = useMutation(
    ({ title, imageUrl, price, description }: MutableProduct) =>
      graphqlFetcher(UPDATE_PRODUCT, {
        id,
        title,
        imageUrl,
        price,
        description,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.PRODUCTS, {
          exact: false,
          refetchInactive: true,
        });
        doneEdit();
      },
    }
  );

  const { mutate: deleteProduct } = useMutation(
    (id: string) => graphqlFetcher(DELETE_PRODUCT, { id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKeys.PRODUCTS, {
          exact: false,
          refetchInactive: true,
        });
      },
    }
  );

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const formData = arrToObj([...new FormData(e.target as HTMLFormElement)]);
    formData.price = Number(formData.price);
    updateProduct(formData as MutableProduct);
  };

  const deleteItem = () => {
    deleteProduct(id);
  };

  if (isEditing)
    return (
      <EditItem
        handleSubmit={handleSubmit}
        title={title}
        imageUrl={imageUrl}
        price={price}
        description={description}
      />
    );
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <img className="product-item__image" src={imageUrl} />
        <p className="product-item__title">{title}</p>
        <span className="product-item__price">₩{price}</span>
      </Link>
      <div className="alertDelete">
        {!createdAt && <span> ❌ 삭제된 상품 ❌</span>}
      </div>
      <Button
        animated="vertical"
        onClick={deleteItem}
        style={{ backgroundColor: "white", marginBottom: "5px" }}
        className="productDelete"
      >
        <Button.Content hidden>Delete</Button.Content>
        <Button.Content visible>
          <Icon name="trash alternate" style={{ fontSize: "17px" }} />
        </Button.Content>
      </Button>
      <Button
        animated="vertical"
        onClick={startEdit}
        style={{ backgroundColor: "white", marginBottom: "5px" }}
        className="productEdit"
      >
        <Button.Content hidden>Edit</Button.Content>
        <Button.Content visible>
          <Icon name="pencil" style={{ fontSize: "17px" }} />
        </Button.Content>
      </Button>
    </li>
  );
};
export default AdminItem;

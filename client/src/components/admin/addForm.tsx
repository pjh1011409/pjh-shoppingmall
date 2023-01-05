import React, { SyntheticEvent } from "react";
import { useMutation } from "react-query";
import { getClient, graphqlFetcher, QueryKeys } from "../../queryClient";
import { ADD_PRODUCT, MutableProduct } from "../../graphql/products";
import arrToObj from "../../util/arrToObj";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AddForm = () => {
  const queryClient = getClient();

  const { mutate: addProduct } = useMutation(
    ({ title, imageUrl, price, description }: MutableProduct) =>
      graphqlFetcher(ADD_PRODUCT, { title, imageUrl, price, description }),
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
    let formData = arrToObj([...new FormData(e.target as HTMLFormElement)]);
    formData.price = Number(formData.price);
    addProduct(formData as MutableProduct);
    formData = [];
  };
  return (
    <form onSubmit={handleSubmit}>
      <Row className="addForm">
        <Col sm className="leftLayout">
          <div className="leftInput">
            Name : <input name="title" type="text" required />
          </div>
          <div className="leftInput">
            Image : <input name="imageUrl" type="text" required />
          </div>
          <div className="leftInput">
            Price : &nbsp;
            <input name="price" type="number" required min="1000" />
          </div>
        </Col>
        <Col sm>
          <div className="rightInput">Description</div>
          <div className="rightInput">
            <textarea name="description" />
          </div>
        </Col>
        <div className="btnLayout">
          <button type="submit" className="addBtn">
            CREATE
          </button>
        </div>
      </Row>
    </form>
  );
};

export default AddForm;

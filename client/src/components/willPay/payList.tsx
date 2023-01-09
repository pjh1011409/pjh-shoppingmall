import React from "react";
import { CartType } from "../../graphql/cart";

interface PayListProps {
  checkedItems: CartType[];
}

const PayList = ({ checkedItems }: PayListProps) => (
  <table className="payTable">
    <thead className="tableHead">
      <tr className="tableTr">
        <th colSpan={2}>Name</th>
        <th>Price</th>
        <th>Amount</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {checkedItems.map(
        ({ product: { imageUrl, price, title, createdAt }, amount, id }) => (
          <tr className="tableTr" key={id}>
            <td colSpan={2}>
              <img
                src={imageUrl}
                style={{ float: "left", margin: "5px 0px", height: "70px" }}
              />
              <div style={{ padding: "35px 0px" }}>{title}</div>
            </td>
            <td>{price}</td>
            <td>{amount}</td>
            <td>{amount * price}</td>
          </tr>
        )
      )}
    </tbody>
  </table>
);

export default PayList;

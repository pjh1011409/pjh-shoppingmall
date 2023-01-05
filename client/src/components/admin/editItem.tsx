import React, { SyntheticEvent } from "react";

interface EditItemProps {
  handleSubmit: (e: SyntheticEvent) => void;
  title: string;

  imageUrl: string;
  price: number;
  description: string;
}

const EditItem = ({
  handleSubmit,
  title,
  imageUrl,
  price,
  description,
}: EditItemProps) => {
  return (
    <div>
      <li
        className="product-item"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="editLayout"> Name</div>
          <input name="title" type="text" required defaultValue={title} />
          <div className="editLayout"> ImageUrl</div>
          <input name="imageUrl" type="text" required defaultValue={imageUrl} />
          <div className="editLayout">Price</div>
          <input
            name="price"
            type="number"
            required
            min="1000"
            defaultValue={price}
          />
          <div className="editLayout">Description</div>{" "}
          <textarea
            name="description"
            defaultValue={description}
            style={{ height: "100px" }}
          />
          <div className="editLayout">
            <button type="submit" className="editBtn">
              Save
            </button>
          </div>
        </form>
      </li>
    </div>
  );
};

export default EditItem;

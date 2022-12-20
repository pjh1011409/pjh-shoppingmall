import { Product } from "../../graphql/products";
import { Link } from "react-router-dom";

const ProductItem = ({ id, imageUrl, price, title }: Product) => {
  return (
    <>
      <li className="product-item">
        <Link to={`/products/${id}`}>
          <p className="product-item__title">{title}</p>
          <img src={imageUrl} className="product-item__image" />
          <span>${price}</span>
        </Link>
      </li>
    </>
  );
};

export default ProductItem;

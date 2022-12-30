import { useQuery } from "react-query";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/product/detail";
import { GET_PRODUCT, Product } from "../../graphql/products";
import React from "react";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<{ product: Product }>(
    [QueryKeys.PRODUCTS, id],
    () => graphqlFetcher(GET_PRODUCT, { id })
  );

  if (!data) return null;

  return <ProductDetail item={data.product} />;
};

export default ProductDetailPage;

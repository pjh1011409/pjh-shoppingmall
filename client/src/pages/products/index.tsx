import { useInfiniteQuery } from "react-query";
import ProductList from "../../components/product/list";
import GET_PRODUCTS from "../../graphql/products";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import { Products } from "../../graphql/products";
import React, { useEffect, useRef } from "react";
import useIntersection from "../../hooks/useIntersection";
import Container from "@mui/material/Container";

const ProductListPage = () => {
  const fetchMoreRef = useRef<HTMLDivElement>(null);
  const intersecting = useIntersection(fetchMoreRef);

  const { data, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery<Products>(
      [QueryKeys.PRODUCTS, "products"],
      ({ pageParam = "" }) =>
        graphqlFetcher(GET_PRODUCTS, { cursor: pageParam }),
      {
        getNextPageParam: (lastPage) => {
          return lastPage.products[lastPage.products.length - 1]?.id;
        },
      }
    );

  useEffect(() => {
    if (!intersecting || !isSuccess || !hasNextPage || isFetchingNextPage)
      return;
    fetchNextPage();
  }, [intersecting]);

  return (
    <Container maxWidth="md">
      <div className="shopLayout">
        <div className="shopTitle">Organic & Soft</div>
        <p className="shopDescription">
          How about a cool and refreshing organic drink with a soft and relaxing
          scent?
        </p>
        <ProductList list={data?.pages || []} />
        <div ref={fetchMoreRef} />
      </div>
    </Container>
  );
};

export default ProductListPage;

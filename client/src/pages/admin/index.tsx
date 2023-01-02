import { useInfiniteQuery } from "react-query";
import AdminList from "../../components/admin/list";
import GET_PRODUCTS from "../../graphql/products";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import { Products } from "../../graphql/products";
import React, { useEffect, useRef, useState } from "react";
import useIntersection from "../../hooks/useIntersection";
import AddForm from "../../components/admin/addForm";
import Container from "@mui/material/Container";

const AdminPage = () => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const fetchMoreRef = useRef<HTMLDivElement>(null);
  const intersecting = useIntersection(fetchMoreRef);

  const { data, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery<Products>(
      [QueryKeys.PRODUCTS, "admin"],
      ({ pageParam = "" }) =>
        graphqlFetcher(GET_PRODUCTS, { cursor: pageParam, showDeleted: true }),
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

  const startEdit = (index: number) => () => setEditingIndex(index);
  const doneEdit = () => setEditingIndex(null);

  return (
    <Container maxWidth="md">
      <div className="adminLayout">
        <div className="adminTitle">Admin</div>
        <AddForm />
        <AdminList
          list={data?.pages || []}
          editingIndex={editingIndex}
          startEdit={startEdit}
          doneEdit={doneEdit}
        />
        <div ref={fetchMoreRef} />
      </div>
    </Container>
  );
};

export default AdminPage;

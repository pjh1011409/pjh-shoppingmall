import React from "react";
import Container from "@mui/material/Container";
import { Result } from "antd";

export const CartResult = () => {
  return (
    <Container maxWidth="md" style={{ minHeight: "530px" }}>
      <div className="cartAlert">
        <Result
          status="404"
          title="장바구니가 비었습니다."
          subTitle="Shopping Cart is empty."
        />
      </div>
    </Container>
  );
};

export const ProductResult = () => {
  return (
    <Container maxWidth="md" style={{ minHeight: "530px" }}>
      <div className="cartAlert">
        <Result
          status="404"
          title="데이터를 불러오지 못했습니다."
          subTitle="Failed to load data."
        />
      </div>
    </Container>
  );
};

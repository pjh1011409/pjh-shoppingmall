import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Space, Spin } from "antd";
import Skeleton from "@mui/material/Skeleton";
import Container from "@mui/material/Container";

export function Loading() {
  return (
    <Container maxWidth="md">
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "530px",
        }}
      >
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </div>
    </Container>
  );
}

export function ProductLoading() {
  return (
    <Container maxWidth="md">
      <Grid className="products">
        {Array.from(new Array(9)).map((item, index) => (
          <Box key={index} className="product-item">
            <Skeleton variant="rectangular" width="full" height={160} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}

export function CartLoading() {
  return (
    <Container maxWidth="md">
      <Grid style={{ marginTop: "160px", minHeight: "450px" }}>
        <Skeleton variant="rectangular" width="full" height={140} />
        <div style={{ height: "30px" }} />
        <Skeleton variant="rectangular" width="full" height={100} />
        <br />
        <Skeleton animation="wave" />
        <br />
        <Skeleton animation="wave" />
        <br />

        <Skeleton animation="wave" />
      </Grid>
    </Container>
  );
}

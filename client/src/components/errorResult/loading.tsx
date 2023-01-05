import Box from "@mui/material/Box";
import React from "react";
import { Space, Spin } from "antd";

const Loading = () => {
  return (
    <Space direction="vertical" style={{ width: "70%" }} className="loading">
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Space>
  );
};

export default Loading;

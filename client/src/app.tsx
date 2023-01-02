import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { getClient } from "./queryClient";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import NavBar from "./components/navigation/navBar";
import React, { useEffect } from "react";
import styled from "styled-components";
import BottomBar from "./components/navigation/bottomBar";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const App = () => {
  const elem = useRoutes(routes);
  const queryClient = getClient();

  const handleScroll = () => {
    if (!window.scrollY) return;
    // 현재 위치가 이미 최상단일 경우 return

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <QueryClientProvider client={queryClient}>
      <Background>
        <NavBar />
        <div style={{ marginTop: "90px" }} />
        {elem}
        <PositionContainer>
          <TopButton onClick={handleScroll}>
            <ArrowCircleUpIcon style={{ color: "orange", fontSize: "40px" }} />
          </TopButton>
        </PositionContainer>
        <BottomBar />
      </Background>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;

const Background = styled.div`
  background-color: var(--background-color);
  color: var(--primary-color);
`;

const PositionContainer = styled.div`
  position: fixed;
  width: 100%;
  bottom: 100px;
  z-index: 0;

  // 데스크탑
  @media screen and (min-width: 480px) {
    right: 5%;
  }
`;

const TopButton = styled.button.attrs(() => ({
  type: "button",
  title: "맨 위로 가기",
  "aria-label": "맨 위로 가기",
}))`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
`;

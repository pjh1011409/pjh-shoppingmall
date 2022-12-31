import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { getClient } from "./queryClient";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import NavBar from "./components/navigation/navBar";
import React, { useEffect } from "react";
import styled from "styled-components";

const App = () => {
  const elem = useRoutes(routes);
  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Background>
        <NavBar />
        <div style={{ marginTop: "100px" }} />
        {elem}
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

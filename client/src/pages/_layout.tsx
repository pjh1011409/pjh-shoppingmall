import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/errorResult/loading";

const Layout: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;

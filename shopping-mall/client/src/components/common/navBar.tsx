import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="gnb">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/products">상품목록</Link>
        </li>
        <li>
          <Link to="/cart">장바구니</Link>
        </li>
        <li>
          <Link to="/admin">관리자페이지</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

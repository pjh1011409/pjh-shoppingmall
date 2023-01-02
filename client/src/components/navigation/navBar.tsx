import React, { useState } from "react";
import DarkOnOff from "./darkOnOff";
import { Link } from "react-router-dom";
import { TbBottle } from "react-icons/tb";
import CartIcon from "./cartIcon";

const page = ["HOME", "ABOUT US", "SHOP", "ADMIN"];
const url = ["/", "", "/products", "admin"];

const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const onClickNav = () => {
    setMenuToggle(false);
  };

  const menuToggleHandler = () => {
    if (menuToggle) setMenuToggle(false);
    else setMenuToggle(true);
  };

  return (
    <div>
      <nav className="navBar">
        <div className="navTitle">
          <TbBottle /> Fresh Life
        </div>
        <DarkOnOff />
        <Link to="/cart" key={`Page ${url}`}>
          <CartIcon />
        </Link>

        {/* 토글을 클릭하게되면 x가 뜨게되고, 그렇지 않으면 버거모양유지 */}
        <div
          className={!menuToggle ? "burgerMenu" : "xMenu"}
          onClick={menuToggleHandler}
        >
          {/* burger에서 x로 변형되는 div */}
          <div className="burgerLine1" />
          <div className="burgerLine2" />
          <div className="burgerLine3" />
        </div>
        {/* 토글을 클릭에 따른 메뉴박스 유무 */}
        <div
          className={[
            "menuBox",
            !menuToggle ? "menuBoxHidden" : "menuBoxVisible",
          ].join(" ")}
        >
          {/* 메뉴박스안에 존재하는 메뉴 리스트 */}
          <div className="menuList">
            {page.map((pg, i) => {
              return (
                <Link to={url[i]} key={`Page ${url}`}>
                  <div className="menuItem" onClick={onClickNav}>
                    {pg}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

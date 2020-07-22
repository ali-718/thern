import React from "react";
import { HorizontalNav } from "./horizontal-menu.stc";
import NavBar, { NavItem, NavLink, Submenu } from "../../shared/navbar";

const HorizontalMenu = ({ menuData, ...restProps }) => {
  return (
    <HorizontalNav {...restProps}>
      <NavBar>
        <NavItem key={`mainmenu-1`}>
          <NavLink path={"/"}>{"HOME"}</NavLink>
        </NavItem>
      </NavBar>
    </HorizontalNav>
  );
};

export default HorizontalMenu;

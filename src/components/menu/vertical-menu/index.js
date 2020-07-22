import React, { useState } from "react";
import Navbar, {
  NavItem,
  NavLink,
  Submenu,
  ExpandButton,
} from "../../shared/navbar";
import { getClosest, getSiblings } from "../../../utils/utilFunctions";
import { VerticalMenuWrap } from "./vertical-menu.stc";

const VerticalMenu = ({ menuArr }) => {
  const [hasHover, setHasHover] = useState(false);
  const onHoverEnter = (e) => {
    setHasHover(true);
  };
  const onMouseLeave = (e) => {
    setHasHover(false);
  };

  const removeClassFromChildren = (parent) => {
    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].tagName === "UL") {
        let child = parent.children[i].children;
        for (let j = 0; j < child.length; j++) {
          child[j].classList.remove("submenu-open");
        }
      }
    }
  };

  const onClickHandler = (e, selector) => {
    const target = e.target;
    const parentEl = target.parentElement;
    if (
      parentEl.classList.contains("menu-expand") ||
      target.classList.contains("menu-expand")
    ) {
      let element = target.classList.contains("icon") ? parentEl : target;
      const parent = getClosest(element, selector);
      const parentSiblings = getSiblings(parent);
      parentSiblings.forEach((sibling) => {
        sibling.classList.remove("submenu-open");
        removeClassFromChildren(sibling);
      });
      removeClassFromChildren(parent);
      parent.classList.toggle("submenu-open");
    }
  };

  return (
    <VerticalMenuWrap isHovered={hasHover}>
      <Navbar>
        <NavItem className="menu-item" id={`menu-item-${1}`}>
          <NavLink
            onMouseEnter={onHoverEnter}
            onMouseLeave={onMouseLeave}
            path={"/"}
          >
            HOME
          </NavLink>
        </NavItem>
        <NavItem className="menu-item" id={`menu-item-${2}`}>
          <NavLink
            onMouseEnter={onHoverEnter}
            onMouseLeave={onMouseLeave}
            path={"/company"}
          >
            ABOUT US
          </NavLink>
        </NavItem>
        <NavItem className="menu-item" id={`menu-item-${3}`}>
          <NavLink
            onMouseEnter={onHoverEnter}
            onMouseLeave={onMouseLeave}
            path={"/project"}
          >
            PROJECTS
          </NavLink>
        </NavItem>
        {/* {menuArr.map((menu, i) => {
          const hasSubmenu = menu.node.isSubmenu ? true : null;
          const submenu = menu.node.submenu;
          const menuIndex = i;
          return (
            <NavItem
              key={`mainmenu-${menu.node.id}`}
              hasSubmenu={hasSubmenu}
              className="menu-item"
              id={`menu-item-${menuIndex}`}
            >
              <NavLink
                onMouseEnter={onHoverEnter}
                onMouseLeave={onMouseLeave}
                path={menu.node.path}
              >
                {menu.node.title}
              </NavLink>
            </NavItem>
          );
        })} */}
      </Navbar>
    </VerticalMenuWrap>
  );
};

export default VerticalMenu;

import React from "react";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust,
  TopAppBarNavigationIcon
} from "@rmwc/top-app-bar";
import { NavLink } from "react-router-dom";
import "@rmwc/top-app-bar/styles";

const Header = (props) => {
  const { toggleSideNav } = props;
  return (
    <div>
      <TopAppBar className="top-app-bar" fixed>
        <TopAppBarRow>
          <TopAppBarSection>
            <TopAppBarNavigationIcon icon="menu" onClick={toggleSideNav} />
            <TopAppBarTitle>
              <NavLink exact to="/" className="header-title">
                <img src="/assets/logo.png" className="logo" alt="logo" />
                <span>confviz</span>
              </NavLink>
            </TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </div>
  );
};

export default Header;

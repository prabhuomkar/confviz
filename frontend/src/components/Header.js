import React from "react";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust,
  TopAppBarNavigationIcon,
} from "@rmwc/top-app-bar";
import { NavLink } from "react-router-dom";
import "@rmwc/top-app-bar/styles";

const Header = ({ toggleSideNav }) => {
  return (
    <div>
      <TopAppBar className="top-app-bar" fixed>
        <TopAppBarRow>
          <TopAppBarSection>
            <TopAppBarNavigationIcon icon="menu" onClick={toggleSideNav} />
            <TopAppBarTitle>
              <NavLink className="header-title" exact to="/">
                <img
                  src="/assets/logo.png"
                  width="36px"
                  height="36px"
                  style={{
                    float: "left",
                  }}
                />
                &nbsp;&nbsp;&nbsp;
                <span>conference-viz</span>
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

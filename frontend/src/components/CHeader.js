import React, { useState } from "react";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderMenuButton,
  SkipToContent,
  SideNavItems,
  SideNavLink,
  SideNav,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from "carbon-components-react/lib/components/UIShell";
import { Link, Redirect } from "react-router-dom";
import EventIcon from "@carbon/icons-react/lib/event/20";
import AboutIcon from "@carbon/icons-react/lib/information/20";
import GitHubIcon from "@carbon/icons-react/lib/logo--github/20";

const CHeader = () => {
  const [isSideNavExpanded, setSideNavExpanded] = useState(false);
  return (
    <HeaderContainer
      render={() => (
        <>
          <Header aria-label="Header">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              isCollapsible
              onClick={() => setSideNavExpanded(!isSideNavExpanded)}
              isActive={isSideNavExpanded}
            />
            <HeaderName element={Link} to="/" prefix="">
              conference-viz
            </HeaderName>
            <HeaderGlobalBar aria-label="Header Navigation">
              <HeaderGlobalAction
                aria-label="About"
                onClick={() => (window.location.href = "/about")}
              >
                <AboutIcon />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="GitHub"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/prabhuomkar/conference-viz")
                }
              >
                <GitHubIcon />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
            <SideNav
              aria-label="Side navigation"
              isFixedNav
              expanded={isSideNavExpanded}
            >
              <SideNavItems>
                <SideNavLink renderIcon={EventIcon} href="/ICLR">
                  ICLR
                </SideNavLink>
                <SideNavLink renderIcon={EventIcon} href="/CVPR">
                  CVPR
                </SideNavLink>
                <SideNavLink renderIcon={EventIcon} href="/ACL">
                  ACL
                </SideNavLink>
                <SideNavLink renderIcon={EventIcon} href="/ICML">
                  ICML
                </SideNavLink>
                <SideNavLink renderIcon={EventIcon} href="/EMNLP">
                  EMNLP
                </SideNavLink>
                <SideNavLink renderIcon={EventIcon} href="/NeurIPS">
                  NeurIPS
                </SideNavLink>
              </SideNavItems>
            </SideNav>
          </Header>
        </>
      )}
    />
  );
};

export default CHeader;

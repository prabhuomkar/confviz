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
import { Link } from "react-router-dom";
import EventDoneIcon from "@carbon/icons-react/lib/event/20";
import EventScheduledIcon from "@carbon/icons-react/lib/event--schedule/20";
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
                <SideNavLink
                  renderIcon={EventDoneIcon}
                  onClick={() => setSideNavExpanded(!isSideNavExpanded)}
                  element={Link}
                  to="/ICLR"
                >
                  ICLR
                </SideNavLink>
                <SideNavLink
                  renderIcon={EventDoneIcon}
                  onClick={() => setSideNavExpanded(!isSideNavExpanded)}
                  element={Link}
                  to="/CVPR"
                >
                  CVPR
                </SideNavLink>
                <SideNavLink
                  renderIcon={EventScheduledIcon}
                  onClick={() => setSideNavExpanded(!isSideNavExpanded)}
                  element={Link}
                  to="/ACL"
                >
                  ACL
                </SideNavLink>
                <SideNavLink
                  renderIcon={EventScheduledIcon}
                  onClick={() => setSideNavExpanded(!isSideNavExpanded)}
                  element={Link}
                  to="/ICML"
                >
                  ICML
                </SideNavLink>
                <SideNavLink
                  renderIcon={EventScheduledIcon}
                  onClick={() => setSideNavExpanded(!isSideNavExpanded)}
                  element={Link}
                  to="/EMNLP"
                >
                  EMNLP
                </SideNavLink>
                <SideNavLink
                  renderIcon={EventScheduledIcon}
                  onClick={() => setSideNavExpanded(!isSideNavExpanded)}
                  element={Link}
                  to="/NeurIPS"
                >
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

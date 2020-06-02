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
import { Link, useHistory } from "react-router-dom";
import EventDoneIcon from "@carbon/icons-react/lib/event/20";
import EventScheduledIcon from "@carbon/icons-react/lib/event--schedule/20";
import AboutIcon from "@carbon/icons-react/lib/information/20";
import GitHubIcon from "@carbon/icons-react/lib/logo--github/20";

const CHeader = () => {
  const history = useHistory();
  const [isSideNavExpanded, setSideNavExpanded] = useState(false);
  const updateIsSideNavExpanded = () => setSideNavExpanded(!isSideNavExpanded);
  return (
    <HeaderContainer
      render={() => (
        <>
          <Header aria-label="Header">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              isCollapsible
              onClick={updateIsSideNavExpanded}
              isActive={isSideNavExpanded}
            />
            <HeaderName element={Link} to="/" prefix="">
              conference-viz
            </HeaderName>
            <HeaderGlobalBar aria-label="Header Navigation">
              <HeaderGlobalAction
                aria-label="About"
                onClick={() => history.push("/about")}
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
                  onClick={updateIsSideNavExpanded}
                  element={Link}
                  to="/ICLR"
                >
                  ICLR
                </SideNavLink>
                <SideNavLink
                  renderIcon={EventDoneIcon}
                  onClick={updateIsSideNavExpanded}
                  element={Link}
                  to="/CVPR"
                >
                  CVPR
                </SideNavLink>
                <SideNavLink
                  renderIcon={EventScheduledIcon}
                  onClick={updateIsSideNavExpanded}
                  element={Link}
                  to="/ACL"
                >
                  ACL
                </SideNavLink>
                <SideNavLink
                  renderIcon={EventScheduledIcon}
                  onClick={updateIsSideNavExpanded}
                  element={Link}
                  to="/ICML"
                >
                  ICML
                </SideNavLink>
                <SideNavLink
                  renderIcon={EventScheduledIcon}
                  onClick={updateIsSideNavExpanded}
                  element={Link}
                  to="/EMNLP"
                >
                  EMNLP
                </SideNavLink>
                <SideNavLink
                  renderIcon={EventScheduledIcon}
                  onClick={updateIsSideNavExpanded}
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

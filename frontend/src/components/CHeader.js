import React from "react";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
  HeaderMenu,
} from "carbon-components-react/lib/components/UIShell";
import { Link } from "react-router-dom";

const CHeader = () => {
  return (
    <Header aria-label="Header">
      <SkipToContent />
      <HeaderName element={Link} to="/" prefix="">
        conference-viz
      </HeaderName>
      <HeaderNavigation aria-label="Header Navigation">
        <HeaderMenu menuLinkName="Conferences">
          <HeaderMenuItem element={Link} to="/ICLR">
            ICLR
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/CVPR">
            CVPR
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/ACL">
            ACL
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/ICML">
            ICML
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/EMNLP">
            EMNLP
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/NeurIPS">
            NeurIPS
          </HeaderMenuItem>
        </HeaderMenu>
        <HeaderMenuItem element={Link} to="/about">
          About
        </HeaderMenuItem>
        <HeaderMenuItem
          href="https://github.com/prabhuomkar/conference-viz"
          target="_blank"
        >
          GitHub
        </HeaderMenuItem>
      </HeaderNavigation>
    </Header>
  );
};

export default CHeader;

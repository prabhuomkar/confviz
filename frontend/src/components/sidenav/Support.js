import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { DrawerSubtitle } from "@rmwc/drawer";
import { ListItem } from "@rmwc/list";
import { Icon } from "@rmwc/icon";

const Support = ({ hide }) => {
  return (
    <div key="support">
      <DrawerSubtitle className="drawer-subtitle">Support</DrawerSubtitle>
      <NavLink className="nav-link" exact to="/about" onClick={hide}>
        <ListItem disabled>
          <Icon
            className="side-nav-icon"
            activeClassName="activated"
            icon="info"
          />
          <span>About Us</span>
        </ListItem>
      </NavLink>
      <NavLink
        className="nav-link"
        activeClassName="activated"
        exact
        to="/contribute"
        onClick={hide}
      >
        <ListItem disabled>
          <Icon className="side-nav-icon" icon="connect_without_contact" />
          <span>Contribute</span>
        </ListItem>
      </NavLink>
    </div>
  );
};

Support.propTypes = {
  hide: PropTypes.func,
};

export default Support;

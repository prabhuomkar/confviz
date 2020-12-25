import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Drawer, DrawerSubtitle, DrawerContent } from "@rmwc/drawer";
import { List, ListItem, ListDivider } from "@rmwc/list";
import Support from "./Support";
//import axios from "axios";
import { Icon } from "@rmwc/icon";
import "@rmwc/drawer/styles";
import "@rmwc/list/styles";
import "./SideNav.scss";

const SideNav = (props) => {
  const { hide, open, data } = props;

  const sideNavItems = [
    {
      subtitle: "conferences",
      items: data,
    },
  ];

  return (
    <Drawer dismissible open={open} className="drawer">
      <DrawerContent className="drawer-content">
        <List>
          {sideNavItems.map((section) => (
            <div key={section.subtitle}>
              <DrawerSubtitle className="drawer-subtitle">
                {section.subtitle}
              </DrawerSubtitle>
              {section.items.map((item) => (
                <NavLink
                  key={item.id}
                  className="nav-link"
                  activeClassName="activated"
                  exact
                  to={item.id}
                  onClick={hide}
                >
                  <ListItem disabled>
                    <Icon className="side-nav-icon" icon="event" />
                    <span>{item.id}</span>
                  </ListItem>
                </NavLink>
              ))}
              <ListDivider />
            </div>
          ))}
          <Support hide={hide} />
          <ListDivider />
        </List>
      </DrawerContent>
    </Drawer>
  );
};

SideNav.propTypes = {
  hide: PropTypes.func,
  open: PropTypes.func,
  data: PropTypes.array,
};

export default SideNav;

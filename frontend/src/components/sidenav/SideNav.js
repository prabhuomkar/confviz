import React from "react";
import { NavLink } from "react-router-dom";
import { Drawer, DrawerSubtitle, DrawerContent } from "@rmwc/drawer";
import { List, ListItem, ListDivider } from "@rmwc/list";
import { Icon } from "@rmwc/icon";
import "@rmwc/drawer/styles";
import "@rmwc/list/styles";
import "./SideNav.css";

const sideNavItems = [
  {
    subtitle: "conferences",
    items: [
      {
        id: 1,
        name: "AAAI",
        icon: "event",
        link: "/AAAI",
        class: "side-nav-icon"
      },
      {
        id: 2,
        name: "ACL",
        icon: "event",
        link: "/ACL",
        class: "side-nav-icon"
      },
      {
        id: 3,
        name: "CVPR",
        icon: "event",
        link: "/CVPR",
        class: "side-nav-icon"
      },
      {
        id: 4,
        name: "ICLR",
        icon: "event",
        link: "/ICLR",
        class: "side-nav-icon"
      }
    ]
  },
  {
    subtitle: "support",
    items: [
      {
        id: 5,
        name: "About Us",
        icon: "info",
        link: "/about",
        class: "side-nav-icon"
      },
      {
        id: 6,
        name: "Contribute",
        icon: "connect_without_contact",
        link: "/contribute",
        class: "side-nav-icon"
      }
    ]
  }
];

const SideNav = (props) => {
  const { hide, open } = props;
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
                  to={item.link}
                  onClick={hide}
                >
                  <ListItem disabled>
                    <Icon className={item.class} icon={item.icon} />
                    <span>{item.name}</span>
                  </ListItem>
                </NavLink>
              ))}
              <ListDivider />
            </div>
          ))}
        </List>
      </DrawerContent>
    </Drawer>
  );
};

export default SideNav;

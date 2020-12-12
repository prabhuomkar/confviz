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
        name: "ICLR",
        icon: "event",
        link: "/ICLR",
        class: "side-nav-icon",
      },
      {
        id: 2,
        name: "CVPR",
        icon: "event",
        link: "/CVPR",
        class: "side-nav-icon",
      },
      {
        id: 3,
        name: "ACL",
        icon: "event",
        link: "/ACL",
        class: "side-nav-icon",
      },
      {
        id: 4,
        name: "ICML",
        icon: "event",
        link: "/ICML",
        class: "side-nav-icon",
      },
      {
        id: 5,
        name: "EMNLP",
        icon: "event",
        link: "/EMNLP",
        class: "side-nav-icon",
      },
      {
        id: 6,
        name: "NIPS",
        icon: "event",
        link: "/NIPS",
        class: "side-nav-icon",
      },
    ],
  },
  {
    subtitle: "support",
    items: [
      {
        id: 7,
        name: "About Us",
        icon: "info",
        link: "/about",
        class: "side-nav-icon",
      },
      {
        id: 8,
        name: "Contribute",
        icon: "connect_without_contact",
        link: "/contribute",
        class: "side-nav-icon",
      },
    ],
  },
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

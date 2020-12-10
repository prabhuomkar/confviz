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
        image: null,
        icon: "event",
        link: "/ICLR",
        class: "conference-viz-icon",
      },
      {
        id: 2,
        name: "CVPR",
        image: null,
        icon: "event",
        link: "/CVPR",
        class: "conference-viz-icon",
      },
      {
        id: 3,
        name: "ACL",
        image: null,
        icon: "event",
        link: "/ACL",
        class: "conference-viz-icon",
      },
      {
        id: 4,
        name: "ICML",
        image: null,
        icon: "event",
        link: "/ICML",
        class: "conference-viz-icon",
      },
      {
        id: 5,
        name: "EMNLP",
        image: null,
        icon: "event",
        link: "/EMNLP",
        class: "conference-viz-icon",
      },
      {
        id: 6,
        name: "NIPS",
        image: null,
        icon: "event",
        link: "/NIPS",
        class: "conference-viz-icon",
      },
    ],
  },
  {
    subtitle: "support",
    items: [
      {
        id: 7,
        name: "About Us",
        image: null,
        icon: "info",
        link: "/about",
        class: "conference-viz-icon",
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
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { DrawerAppContent } from "@rmwc/drawer";
import Home from "../../pages/Home";
import Conference from "../../pages/Conference";
import About from "../../pages/About";
import getConferences from "../../getConferences";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import SideNav from "../sidenav/SideNav";

const Content = (props) => {
  const { open, toggle } = props;
  const { data, error, loading } = getConferences(
    "https://confviz.herokuapp.com/conferences"
  );

  if (error) {
    return <Error />;
  }
  if (!loading) {
    return <Loading />;
  }
  return (
    <div>
      <SideNav hide={toggle} open={open} data={data} />
      <DrawerAppContent>
        <Switch>
          <Route exact path="/" component={() => <Home data={data} />} />
          <Route exact path="/about" component={About} />
          <Route exact path="/:id" component={Conference} />
          <Route
            path="/contribute"
            component={() => {
              window.location.href =
                "https://github.com/prabhuomkar/conference-viz";
            }}
          />
        </Switch>
      </DrawerAppContent>
    </div>
  );
};

Content.propTypes = {
  open: PropTypes.func,
  toggle: PropTypes.func,
};

export default Content;

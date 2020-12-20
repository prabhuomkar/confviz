import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { DrawerAppContent } from "@rmwc/drawer";
import Header from "./components/header/Header";
import SideNav from "./components/sidenav/SideNav";
import Home from "./pages/Home";
import Conference from "./pages/Conference";
import About from "./pages/About";
import "./App.scss";

const App = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <BrowserRouter>
      <div className="App">
        <Header toggleSideNav={toggle} />
        <SideNav hide={toggle} open={open} />
        <DrawerAppContent>
          <Route path="/" exact component={Home} />
          <Route path="/AAAI" exact render={() => <Conference id="AAAI" />} />
          <Route path="/ACL" exact render={() => <Conference id="ACL" />} />
          <Route path="/CVPR" exact render={() => <Conference id="CVPR" />} />
          <Route path="/ICLR" exact render={() => <Conference id="ICLR" />} />
          <Route path="/about" exact component={About} />
          <Route
            path="/contribute"
            component={() => {
              window.location.href =
                "https://github.com/prabhuomkar/conference-viz";
            }}
          />
        </DrawerAppContent>
      </div>
    </BrowserRouter>
  );
};

export default App;

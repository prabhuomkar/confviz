import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { DrawerAppContent } from "@rmwc/drawer";
import Header from "./components/header/Header";
import SideNav from "./components/sidenav/SideNav";
import Home from "./pages/Home";
import Conference from "./pages/Conference";
import About from "./pages/About";
import "./App.css";

const App = () => {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);
  return (
    <BrowserRouter>
      <div className="App">
        <Header toggleSideNav={toggle} />
        <SideNav hide={toggle} open={open} />
        <DrawerAppContent>
          <Route path="/" exact component={Home} />
          <Route path="/ICLR" exact render={() => <Conference id="ICLR" />} />
          <Route path="/CVPR" exact render={() => <Conference id="CVPR" />} />
          <Route path="/ACL" exact render={() => <Conference id="ACL" />} />
          <Route path="/ICML" exact render={() => <Conference id="ICML" />} />
          <Route path="/EMNLP" exact render={() => <Conference id="EMNLP" />} />
          <Route path="/NIPS" exact render={() => <Conference id="NIPS" />} />
          <Route path="/about" exact component={About} />
        </DrawerAppContent>
      </div>
    </BrowserRouter>
  );
};

export default App;

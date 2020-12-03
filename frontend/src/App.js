import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { DrawerAppContent } from "@rmwc/drawer";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import Home from "./pages/Home";
import About from "./pages/About";
import ICLR from "./pages/ICLR";
import "./App.css";

const App = () => {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);
  return (
    <BrowserRouter>
      <div className="App">
        <Header toggleSideNav={toggle} />
        <SideNav open={open} />
        <DrawerAppContent>
          <Route path="/" exact component={Home} />
          <Route path="/ICLR" exact component={ICLR} />
          <Route path="/about" exact component={About} />
        </DrawerAppContent>
      </div>
    </BrowserRouter>
  );
};

export default App;

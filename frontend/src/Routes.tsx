import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main";
import Introduce from "./pages/Introduce";
import Nav from "./components/common/Nav"

function Routes() {
  return (
    <BrowserRouter>
      <Nav />
      <Route exact path="/" component={Main} />
      <Route exact path="/Intro" component={Introduce} />
    </BrowserRouter>
  );
}

export default Routes;

import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

/*PAGES*/
import DesignerPortfolio from "./Pages/DesignerPortfolio";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const Root = () => {
  return (
    <BrowserRouter basename={"/"}>
      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/`}
          component={DesignerPortfolio}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();

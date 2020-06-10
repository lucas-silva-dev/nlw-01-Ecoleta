import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

// import { Container } from './styles';

import Home from "./pages/Home";
import CreatePoint from "./pages/CreatePoint";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreatePoint} path="/cadastrar" />
    </BrowserRouter>
  );
};

export default Routes;

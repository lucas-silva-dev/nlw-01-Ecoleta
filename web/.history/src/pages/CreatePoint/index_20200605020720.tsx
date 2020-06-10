import React from "react";
import { Link } from "react-router-dom";

import "./styles";

import logo from "../../assets/logo.svg";

const CreatePoint: React.FC = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />
      </header>
    </div>
  );
};

export default CreatePoint;

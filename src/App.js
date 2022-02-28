import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';
import { render } from "@testing-library/react";

function App(){
  return(
    <Router>
        <Routes/>
    </Router>
  );
};
export default App;


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Room from "./Room";
ReactDOM.render(
  <Router>
    <Route path="/" exact>
      <App />
    </Route>
    <Route path="/room/:id">
      <Room />
    </Route>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

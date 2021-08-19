import React from "../snowpack/pkg/react.js";
import ReactDOM from "../snowpack/pkg/react-dom.js";
import "./index.css.proxy.js";
import {HashRouter} from "../snowpack/pkg/react-router-dom.js";
import App3 from "./App.js";
const mountNode = document.getElementById("root");
ReactDOM.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(HashRouter, null, /* @__PURE__ */ React.createElement(App3, null))), mountNode);

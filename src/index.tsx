import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Advice from "./Advice";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Advice />
  </React.StrictMode>
);

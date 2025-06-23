import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "../styles/index.css";
import BackgroundFound from "../pages/backgroundFound/BackgroundFound";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BackgroundFound />
    <App />
  </React.StrictMode>
);

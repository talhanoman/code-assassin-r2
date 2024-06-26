import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/bootstrap.min.css";
//CSS & Bootstrap
import "./assets/css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';    
// import "./assets/css/select2.min.css";
//Font Awesome
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";
import App from "./App";


// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App/>
  </>
);

import React from "react";
import ReactDOM from "react-dom";
import TreeDirectory from "./TreeDirectory";

import "semantic-ui-css/semantic.min.css";
import "semantic-ui-css/semantic.min";
import { menuList } from "./menuList";

function App() {
  return <TreeDirectory menus={menuList} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

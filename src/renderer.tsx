import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./App";

import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Get typedIpcRenderer from the preload script
declare global {
  interface Window {
    typedIpcRenderer: any;
  }
}

if (process.env.NODE_ENV === "development") console.clear();

ReactDom.render(<App />, document.getElementById("root"));

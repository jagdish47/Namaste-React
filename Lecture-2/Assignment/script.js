import React from "react";
import ReactDOM from "react-dom/client";

const head1 = React.createElement(
  "h1",
  { id: "head-one", key: "one" },
  "Welcome to Namaste React!"
);
const head2 = React.createElement(
  "h2",
  { id: "head-two", key: "two" },
  "Jagdish Kumawat"
);

const container = React.createElement(
  "div",
  { id: "container", key: "three" },
  [head1, head2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

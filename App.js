import React from "react";

import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am rr tag"),
    React.createElement("h2", {}, "I am hero tag"),
  ]),
  //another children
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am hero tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!"
);

// console.log(heading); //return js object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

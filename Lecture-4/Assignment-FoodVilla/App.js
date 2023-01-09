import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <h2 id="title" key="h2">
      Food Villa
    </h2>
  );
};

const Header = () => {
  return (
    <>
      <Title />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);

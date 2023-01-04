import React from "react";
import ReactDOM from "react-dom/client";

// const head1 = React.createElement("h1", { id: "head-one" }, "Hello Everyone");
// const head2 = React.createElement(
//   "h2",
//   { id: "head-two" },
//   "Welcome to Namaste React"
// );

// const container = React.createElement("div", { id: "container" }, [
//   head1,
//   head2,
// ]);

// const root = ReactDOM.createrRoot(document.getElementById("root"));

// root.render(container);

// COMOPONENTS IN REACT

const header = () => {
  return <h1>Namsate from Components</h1>;
};

const headerOne = () => {
  return (
    <div>
      <h1>welcome to the namster react course</h1>
      <h2>Good morning</h2>
      <h3>amazing session</h3>
    </div>
  );
};

//some programmer not write return keyword it's totally fine both are exactly same
const headerTwo = () => (
  <div>
    <p>another way to write componenet</p>
    <p>How are you you ar doing great and i am loving it</p>
  </div>
);

const headerThree = () => {
  <div>
    <h1>also a valid syntax to write component</h1>
    <h2>Good morning</h2>
    <h3>amazing session</h3>
  </div>;
};

// JSX
const imgUrl =
  "https://imgk.timesnownews.com/story/1565686105-shrikrishnaa.jpg?tr=w-1200,h-900";

const img = <img src={imgUrl} alt="Here is JSX tag for image" />;

const head3 = (
  <h3 className="head3" key="one">
    How are you
  </h3>
);

// Create JSX
const title = <h1>How are you brother</h1>;

// Crete componenet
const navbar = () => {
  return (
    <div>
      {/* {JSX} */}
      {/* <Component/> */}
      {/* another way */}
      {/* {head3()} == <head3/> */}
      {/* writing JSX inside the function componenet {} you can write any javascirpt inside this {} bracket */}
      {title}
      {/* This is the way you can pass componet inside another component */}
      <head3 />
      <h1>Hiii</h1>
      <h2>Welcome</h2>
    </div>
  );
};

// OLDER WAY TO CREATE
// const list1 = React.createElement("li", {}, "About us");
// const list2 = React.createElement("li", {}, "Support");
// const list3 = React.createElement("li", {}, "Home");

// const unOrder = React.createElement("ul", {}, [list1, list2, list3]);

// const head1 = React.createElement("h1", { id: "head-one" }, "Namaste React!");

// const container = React.createElement("div", { className: "header" }, [
//   head1,
//   unOrder,
//   head3,
//   img,
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);
root.render(<header />);

// Lecture 3rd

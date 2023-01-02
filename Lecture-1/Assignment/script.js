// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//   },
//   "Heading 1"
// );

// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "title",
//   },
//   "Heading 2"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading, heading2]
// );

// console.log(container);

const name = React.createElement(
  "h1",
  { id: "name", key: "one" },
  "Jagdish Kumawat"
);
const wc = React.createElement(
  "p",
  { id: "welcome", key: "two" },
  "welcome to React"
);

const link = React.createElement(
  "a",
  {
    href: "https://www.google.com/",
    style: { color: "red", backgroundColor: "black" },
  },
  "Google"
);

const div = React.createElement("div", { className: "container" }, [
  name,
  wc,
  link,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

root.render(div);

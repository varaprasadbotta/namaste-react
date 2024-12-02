const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "heading 1" }, "This is h1 element"),
      React.createElement("h2", { id: "heading 2" }, "This is h2 element"),
    ]),
  ],
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading 1" }, "This is h1 element"),
    React.createElement("h2", { id: "heading 2" }, "This is h2 element"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", abc: "abc" },
//   "Hello world from React!"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

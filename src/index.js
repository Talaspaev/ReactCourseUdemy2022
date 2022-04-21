// Import the react and reactDOM libraries

import React from "react";
import ReactDOM from "react-dom";

// Create JSX component

const App = () => {
  return <div>Hi there!</div>;
};

//Take react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));

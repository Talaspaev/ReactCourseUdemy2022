// Import the react and reactDOM libraries

import React from "react";
import ReactDOM from "react-dom";

// Create JSX component

const App = () => {
  return (
    <div>
      <label for="name">Enter name:</label>
      <input id="name" />
      // eslint-disable-next-line react/style-prop-object
      <button style="background:red;">Submit</button>
    </div>
  );
};

//Take react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));

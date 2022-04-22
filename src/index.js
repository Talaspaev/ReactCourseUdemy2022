// Import the react and reactDOM libraries

import React from "react";
import ReactDOM from "react-dom";

// Create JSX component

const App = () => {
  const labelText = "Enter name:";
  const buttonStyle = { backgroundColor: "blue", color: "white" };
  const buttonText = { value: "Sumbit" };
  return (
    <div>
      <label for="name" className="label">
        {labelText}
      </label>
      <input id="name" />
      <button style={buttonStyle}>{buttonText.value}</button>
    </div>
  );
};

//Take react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));

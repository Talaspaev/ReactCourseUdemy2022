// Import the react and reactDOM libraries

import React from "react";
import { createRoot } from "react-dom/client";

// Create JSX component

const App = () => {
  const labelText = () => console.log("Enter name:");
  const buttonStyle = { backgroundColor: "blue", color: "white" };
  const buttonText = { value: "push" };
  return (
    <div>
      <label htmlFor="name" className="label">
        {labelText()}
      </label>
      <input id="name" />
      <button style={buttonStyle}>{buttonText.value}</button>
    </div>
  );
};

//Take react component and show it on the screen
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);

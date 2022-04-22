// Import the react and reactDOM libraries

import React from "react";
import createRoot from "react-dom/client";

// Create JSX component

const App = () => {
  return <div>Hi there!</div>;
};

//Take react component and show it on the screen

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);


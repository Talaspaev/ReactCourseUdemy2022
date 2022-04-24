// Import the react and reactDOM libraries

import React from "react";
import { createRoot } from "react-dom/client";
import CommentDetail from "./CommenDetails";

// Create JSX component

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" />
      <CommentDetail author="Jane" />
      <CommentDetail author="Kris" />
    </div>
  );
};

//Take react component and show it on the screen
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);

// Import the react and reactDOM libraries

import React from "react";
import { createRoot } from "react-dom/client";
import faker from "faker";

// Create JSX component

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="#" className="avatar">
          <img alt="avatar" src={faker.image.image()} />
        </a>
        <div className="content">
          <a href="#" className="autor">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 2pm</span>
          </div>
          <div className="text">Good comment</div>
        </div>
      </div>
    </div>
  );
};

//Take react component and show it on the screen
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);

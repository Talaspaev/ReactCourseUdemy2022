// Import the react and reactDOM libraries

import React from "react";
import { createRoot } from "react-dom/client";

import CommentDetail from "./CommenDetails";
import ApprovalCard from "./ApprovalCard";

import faker from "faker";

// Create JSX component

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Great"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 2PM"
          content="Nice"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Kris"
          timeAgo="Yesterday at 5:30PM"
          content="Cool"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

//Take react component and show it on the screen
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);

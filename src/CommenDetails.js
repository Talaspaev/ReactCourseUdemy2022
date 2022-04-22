import React from "react";
import faker from "faker";


const CommentDetail = () => {
  return (
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
  );
};
export default CommentDetail;

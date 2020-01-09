import React from "react";

const LikeButton = ({ toggleLike }) => {
  return <button onClick={() => toggleLike()}>Like Me</button>;
};

export default LikeButton;

import React from "react";

const UnlikeButton = ({ toggleLike }) => {
  return <button onClick={() => toggleLike()}>UnLike Me</button>;
};

export default UnlikeButton;

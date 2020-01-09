import React from 'react';

const LikeButton = ({ handleClick }) => {
return (
  <button onClick={() => handleClick()}>Like Me</button>
)
}

export default LikeButton;
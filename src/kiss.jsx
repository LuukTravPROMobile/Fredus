import React from "react";

const Card = ({ text, buttonText }) => {
  return (
    <div className="card">
      <p>{text}</p>
      <button>{buttonText}</button>
    </div>
  );
};

export default Card;

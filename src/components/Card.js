import React from "react";
import "../css/Card.css"; // Import your custom CSS file for styling

const Card = ({ title, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{title}</h3>
    </div>
  );
};

export default Card;

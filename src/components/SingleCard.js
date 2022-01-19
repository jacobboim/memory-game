import React from "react";
import "./SingleCard.css";

function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          // src="/img/cover.png"
          src="/img/cover2.jpeg"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}

export default SingleCard;

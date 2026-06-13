import App from "../App";

const CardDisplay = ({ card, isFlipped, onFlipCard }) => { // destructured; receiving props
  return (
    <div className="flip-card" onClick={onFlipCard}>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          <img src={card.question} alt="Pigeon breed"></img>
        </div>
        <div className="flip-card-back">
          <p>{card.answer}</p>
        </div>
      </div>
      <span className={
            card.category === "Common" ? (
            "category-common" ) : (
            card.category === "Rare" ? (
            "category-rare" ) : (
            card.category === "Ornamental" ? (
            "category-ornamental"
            ) : (null)))}>{card.category}</span>
    </div>
  );
};

export default CardDisplay;
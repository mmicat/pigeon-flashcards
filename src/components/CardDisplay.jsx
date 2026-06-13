import App from "../App";

const CardDisplay = ({ card, isFlipped, onFlipCard }) => { // destructured; receiving props
  return (
    <div className="card" onClick={onFlipCard}> // passed click event
      <div className="card-content">
        {isFlipped ? (
          <p>{card.answer}</p> // display card answer
        ) : (
          <img src={card.question} alt="Pigeon breed"></img> // display image question
        )}
        <span className={
            card.category === "Common" ? (
            "category-common" ) : (
            card.category === "Rare" ? (
            "category-rare" ) : (
            card.category === "Ornamental" ? (
            "category-ornamental"
            ) : (null)))}></span>
      </div>
    </div>
  );
};

export default CardDisplay;
const CardDisplay = ({ card, isFlipped, onFlipCard, onMarkMastered }) => { 
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
            
      {/* new Mastered button */}
      <button 
        className="btn-mastered" 
        onClick={(e) => {
          e.stopPropagation(); // stops the card from flipping when button is clicked
          onMarkMastered();
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{marginRight: "5px"}}>
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
        </svg>
        Mastered
      </button>
    </div>
  );
};

export default CardDisplay;
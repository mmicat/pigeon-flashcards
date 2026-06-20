const Controls = ({handleNextCard, handlePrevCard, isFirstCard, isLastCard, handleShuffle}) => { // destructured; receiving props
  return (
    <div className="controls">
      <button className="button" onClick={handlePrevCard} disabled={isFirstCard}>
        Back
      </button>
      <button className="button" onClick={handleNextCard} disabled={isLastCard}>
        Next
      </button>
      <button className="button" onClick={handleShuffle}>
        Shuffle
      </button>
    </div>
  );
};

export default Controls;
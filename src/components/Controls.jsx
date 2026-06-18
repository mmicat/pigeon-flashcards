import App from "../App";
import CardDisplay from "./CardDisplay";

const Controls = ({handleNextCard, handlePrevCard, isFirstCard, isLastCard}) => { // destructured; receiving props
  return (
    <div className="controls">
      <button className="button" onClick={handlePrevCard} disabled={isFirstCard}>
        Previous
      </button>
      <button className="button" onClick={handleNextCard} disabled={isLastCard}>
        Next
      </button>
    </div>
  );
};

export default Controls;
import App from "../App";
import CardDisplay from "./CardDisplay";

const Controls = ({handleNextCard}) => { // destructured; receiving props
  return (
    <div className="controls">
      <button className="button" onClick={handleNextCard}>
        Next
      </button>
    </div>
  );
};

export default Controls;
import App from "../App";
import CardDisplay from "./CardDisplay";

const Controls = ({handleNextCard}) => { // destructured; receiving props
  return (
    <button onClick={handleNextCard}>Next</button>
  );
};

export default Controls;
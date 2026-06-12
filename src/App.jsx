import './App.css';
import { useState } from 'react';

const App = () => {
  const pigeonCards = [
    {
      question: "./assets/dove-mourning.jpg",
      answer: "Mourning Dove",
      category: "Common"
    },
    {
      question: "",
      answer: "",
      category: "Common"
    },
    {
      question: "",
      answer: "",
      category: "Rare"
    },
    {
      question: "",
      answer: "",
      category: "Ornamental"
    },
    {
      question: "./assets/pigeon-birminghamroller.jpg",
      answer: "Birmingham Roller",
      category: "Rare"
    }
  ];

  function getRandomIntExclusive(min, max) { // outsourced logic
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  const [currentCardIndex, setCurrentCardIndex] = useState(getRandomIntExclusive(0, pigeonCards.length));
  const [isFlipped, setIsFlipped] = useState(false);

  function handleNextCard() {
    let randomCardIndex = currentCardIndex; // start equal to force loop
    while (randomCardIndex === currentCardIndex){
      randomCardIndex = getRandomIntExclusive(0,pigeonCards.length);
    }
    setCurrentCardIndex(randomCardIndex);
    setIsFlipped(false);
  }

  function handleFlipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Pigeon Coo-nnosieur</h1>
        <h3>Can you correctly identify these different pigeon breeds from around the world?</h3>
        <span>Total Cards: {pigeonCards.length}</span>
      </div>

      <CardDisplay // passing props
        card={pigeonCards[currentCardIndex]}
        isFlipped={isFlipped}
        onFlipCard={handleFlipCard}
      />
      <Controls 
        nextCard={handleNextCard}
      />

    </div>
  )
}

export default App
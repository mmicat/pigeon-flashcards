import './App.css';
import { useState } from 'react';
import CardDisplay from './components/CardDisplay';
import Controls from './components/Controls';

const App = () => {
  const pigeonCards = [
    {
      question: "./assets/dove-mourning.jpg",
      answer: "Mourning Dove",
      category: "Common"
    },
    {
      question: "./assets/pigeon-pinkneckedgreen",
      answer: "Pink-Necked Green",
      category: "Rare"
    },
    {
      question: "./assets/pigeon-victoriacrowned",
      answer: "Victoria Crowned",
      category: "Rare"
    },
    {
      question: "./assets/dove-lemon",
      answer: "Lemon Dove",
      category: "Common"
    },
    {
      question: "./assets/pigeon-birminghamroller.jpg",
      answer: "Birmingham Roller",
      category: "Rare"
    },
    {
      question: "./assets/pigeon-rock.jpg",
      answer: "Rock",
      category: "Common"
    },
    {
      question: "./assets/pigeon-jacobin.jpg",
      answer: "Jacobin",
      category: "Ornamental"
    },
    {
      question: "./assets/dove-zebra.jpg",
      answer: "Zebra",
      category: "Common"
    },
    {
      question: "./assets/pigeon-nicobar.jpg",
      answer: "Nicobar",
      category: "Rare"
    },
    {
      question: "./assets/pigeon-luzonbleedingheart.jpg",
      answer: "Luzon Bleeding-heart",
      category: "Rare"
    },
    {
      question: "./assets/pigeon-brunnerpouter.jpg",
      answer: "Brunner Pouter",
      category: "Ornamental"
    },
    {
      question: "./assets/dove-eurasiancollared.jpg",
      answer: "Eurasian Collared Dove",
      category: "Common"
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
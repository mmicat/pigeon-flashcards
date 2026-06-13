import './App.css';
import { useState } from 'react';
import CardDisplay from './components/CardDisplay';
import Controls from './components/Controls';

import doveMourning from './assets/dove-mourning.jpg';
import pigeonPinkNeckedGreen from './assets/pigeon-pinkneckedgreen.jpg';
import pigeonVictoriaCrowned from './assets/pigeon-victoriacrowned.jpg';
import doveLemon from './assets/dove-lemon.jpg';
import pigeonBirminghamRoller from './assets/pigeon-birminghamroller.jpg';
import pigeonRock from './assets/pigeon-rock.jpg';
import pigeonJacobin from './assets/pigeon-jacobin.jpg';
import doveZebra from './assets/dove-zebra.jpg';
import pigeonNicobar from './assets/pigeon-nicobar.jpg';
import pigeonLuzonBleedingHeart from './assets/pigeon-luzonbleedingheart.jpg';
import pigeonBrunnerPouter from './assets/pigeon-brunnerpouter.jpg';
import doveEurasianCollared from './assets/dove-eurasiancollared.jpg';
import doveJambuFruitMale from './assets/dove-jambufruitmale.jpg';
import pigeonCommonWood from './assets/pigeon-commonwood.jpg';
import pigeonSpeckled from './assets/pigeon-speckled.jpg';


const App = () => {
  const pigeonCards = [
    {
      question: doveMourning,
      answer: "Mourning Dove",
      category: "Common"
    },
    {
      question: pigeonPinkNeckedGreen,
      answer: "Pink-Necked Green Pigeon",
      category: "Rare"
    },
    {
      question: pigeonVictoriaCrowned,
      answer: "Victoria Crowned Pigeon",
      category: "Rare"
    },
    {
      question: doveLemon,
      answer: "Lemon Dove",
      category: "Common"
    },
    {
      question: pigeonBirminghamRoller,
      answer: "Birmingham Roller",
      category: "Rare"
    },
    {
      question: pigeonRock,
      answer: "Rock Dove/Pigeon",
      category: "Common"
    },
    {
      question: pigeonJacobin,
      answer: "Jacobin Pigeon",
      category: "Ornamental"
    },
    {
      question: doveZebra,
      answer: "Zebra Dove",
      category: "Common"
    },
    {
      question: pigeonNicobar,
      answer: "Nicobar Pigeon",
      category: "Rare"
    },
    {
      question: pigeonLuzonBleedingHeart,
      answer: "Luzon Bleeding-heart Pigeon",
      category: "Rare"
    },
    {
      question: pigeonBrunnerPouter,
      answer: "Brunner Pouter Pigeon",
      category: "Ornamental"
    },
    {
      question: doveEurasianCollared,
      answer: "Eurasian Collared Dove",
      category: "Common"
    },
    {
      question: doveJambuFruitMale,
      answer: "Jambu Fruit Dove (Male)",
      category: "Rare"
    },
    {
      question: pigeonCommonWood,
      answer: "Common Wood Pigeon",
      category: "Common"
    },
    {
      question: pigeonSpeckled,
      answer: "Speckled Pigeon",
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
        handleNextCard={handleNextCard}
      />

    </div>
  )
}

export default App
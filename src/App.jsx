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
  const [userGuess, setUserGuess] = useState('');
  const [guessStatus, setGuessStatus] = useState(''); // '', 'correct', 'incorrect'
  
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
      category: "Ornamental"
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

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleGuessChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    const correctAnswer = pigeonCards[currentCardIndex].answer.toLowerCase().trim();
    const userAnswer = userGuess.toLowerCase().trim();

    if (userAnswer === correctAnswer) {
      setGuessStatus('correct')
    } else {
      setGuessStatus('incorrect')
    }
  }
  
  function handleNextCard() {
    if (currentCardIndex < pigeonCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
      setUserGuess("");
      setGuessStatus("");
    }
  }

  function handlePrevCard() {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
      setUserGuess("");
      setGuessStatus("");
    }
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
      <form onSubmit ={handleGuessSubmit} className='guess-form'>
        <label htmlFor='userGuess'>Enter your guess:</label>
        <input 
          type='text'
          id='userGuess'
          value={userGuess}
          onChange={handleGuessChange}
          className={guessStatus}
          placeholder='Guess the pigeon...'
        />
        <button type='submit' className='button'>Guess?</button>
      </form>
      <Controls 
        handleNextCard={handleNextCard}
        handlePrevCard={handlePrevCard}
        isFirstCard={currentCardIndex === 0}
        isLastCard={currentCardIndex === pigeonCards.length - 1}
      />

    </div>
  )
}

export default App
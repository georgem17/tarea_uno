import { useState } from 'react';
import phrases from "./assets/phrases.json";
import { getRandomNumber } from "./utils/getRandom";
import './App.css';
import Phrase from './components/Phrase/Phrase';
import Button from './components/button/Button';

import espacio1 from "./assets/espacio1.jpg";
import espacio2 from "./assets/espacio2.jpg";
import espacio3 from "./assets/espacio3.jpg";
import espacio4 from "./assets/espacio4.jpg";

const backgrounds = [espacio1, espacio2, espacio3, espacio4];

function App() {
 // const phraseObjet = phrases[getRandomNumber(phrases.length - 1)];
  const getRandomPhrase = () => phrases[getRandomNumber(phrases.length - 1)];
  const getRandomBackground = () =>
    backgrounds[getRandomNumber(backgrounds.length - 1)];
  
  const [phraseObjet, setphraseObjet] = useState(getRandomPhrase());
  const [background, setBackground] = useState(getRandomBackground());

  const handleClik = () => {
    let newPhrase = getRandomPhrase();
    let newBackground = getRandomBackground();

    while (newPhrase == getRandomPhrase) {
      newPhrase = getRandomPhrase();
    }
    while (newBackground == background) {
      newBackground = getRandomBackground();
    }

    setphraseObjet(newPhrase);
    setBackground(newBackground);
  };

  return (
    <div
      className="container_app"
      style={{ backgroundImage: `url("${background}")` }}
    >
      <h1>🌌GalaxInfo🌌</h1>

      <Phrase phrase={phraseObjet.phrase} />

      <div className="btn_container">
        <Button handlerClik={handleClik} />
      </div>
      <p className='info_author'>
        Author: {phraseObjet.author}
      </p>
    </div>
  );
}

export default App; 

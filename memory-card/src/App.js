import logo from './logo.svg';
import './App.css';
import CurScore from './components/CurScore';
import BestScore from './components/BestScore';
import ScoreTester from './components/ScoreTester';
import Card from './components/Card';
import {useState,useEffect} from 'react';

function App() {
  const [pastScores, setPastScores] = useState([]);
  const [cards, setCards] = useState([]);
  const [usedLetters, setUsedLetters] = useState([]);
  const [score, setScore] = useState(0);
  function getRandomCapitalLetter() {
    const charCode = Math.floor(Math.random() * 26) + 65;
    return String.fromCharCode(charCode);
  }
  useEffect(() => {
    let initialCards = [];
    for(let i = 0; i < 10; i++) {
      initialCards.push(getRandomCapitalLetter());
    }
    setCards(initialCards);
  }, [])
  useEffect(() => {
    setPastScores([...pastScores, score]);
  }, [score])
  function useLetter(l){
    if(usedLetters.includes(l)){
      setScore(0);
    }
    else{
      setUsedLetters(prevUsedLetters => [...prevUsedLetters, l]);
      setScore(prevScore => prevScore + 1);
    }
  }
  return (
    <div className="App">
      <CurScore score={score}/>
      <BestScore pastScores={pastScores} />
      {/*<ScoreTester oldScores = {pastScores} setScore={setPastScores}/>*/}
      {/*<Card letter={'A'}/>*/}
      <div className="container">
        {cards.map((card, i) => <Card key={i} letter={card} handlePick={useLetter}/>)}
      </div>
    </div>
  );
}

export default App;

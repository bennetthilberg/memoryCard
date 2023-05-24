import logo from './logo.svg';
import './App.css';
import CurScore from './components/CurScore';
import BestScore from './components/BestScore';
import ScoreTester from './components/ScoreTester';
import Card from './components/Card';
import {useState} from 'react';

function App() {
  const [pastScores, setPastScores] = useState([]);
  return (
    <div className="App">
      <CurScore score=''/>
      <BestScore pastScores={pastScores} />
      {/*<ScoreTester oldScores = {pastScores} setScore={setPastScores}/>*/}
      <Card letter={'A'}/>
    </div>
  );
}

export default App;

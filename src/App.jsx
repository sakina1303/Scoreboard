import { useState } from 'react';
import './App.css';
import ScoreBoardHeader from './components/ScoreBoardHeader.jsx';
import ScoreTracker from './components/ScoreTracker.jsx';
import Wicket from './components/wicket.jsx';

const Meow = () => {
  const [score, setScore] = useState(0);
  const [balls, setBalls] = useState(0);
  const [over, setOver] = useState(0);
  const [wickets, setWickets] = useState(0);

  const HandleRun = (runs) => {
    setScore(score + runs);
    setBalls(balls + 1);
    if (balls + 1 === 6) {
      setBalls(0);
      setOver(over + 1);
    }
  };

  const HandleExtraRun = () => {
    setScore(score + 1);
  };

  const incWickets = () => {
    if (wickets < 10) {
      setWickets(wickets + 1);
      setBalls(balls + 1);
      if (balls + 1 === 6) {
        setBalls(0);
        setOver(over + 1);
      }
    }
  };

  const resetGame = () => {
    setScore(0);
    setBalls(0);
    setOver(0);
    setWickets(0);
  };

  const remainingBalls = 6 - balls;

  let title = 'Score Board';
  return (
    <div className="scoreboard-container">
      <ScoreBoardHeader title={title} />
      <ScoreTracker score={score} />
      <h2>Overs: {over}.{balls}</h2>
      <h2>Remaining Balls in Over: {remainingBalls}</h2>
      <Wicket title="Wickets" wickets={wickets} />

      <div className="button-group">
        <h3>Runs</h3>
        {[0, 1, 2, 3, 4, 5, 6].map((run) => (
          <button
            key={run}
            className="button"
            onClick={() => HandleRun(run)}
          >
            Run: {run}
          </button>
        ))}
      </div>

      <div className="buttonss">
        <h3>Extras</h3>
        <button className="button" onClick={HandleExtraRun}>
          Bye / No Ball / Wide
        </button>
      </div>

      <div className="buttonss">
        <h3>Wickets</h3>
        <button
          className="button"
          onClick={incWickets}
          disabled={wickets >= 10}
        >
          Wicket
        </button>
      </div>

      <div className="buttonss">
        <h3>Game Controls</h3>
        <button className="button reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
};

export { Meow };

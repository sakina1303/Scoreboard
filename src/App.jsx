import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RiFacebookFill } from 'react-icons/ri'

const Meow= () => {
  const [score, setscore] = useState(0)
  const [balls, setballs] = useState(0)

  
  const HandleRun = (runs) => {
    setscore(score+runs)
    setballs(balls+1)
  }

  const HandleByeRun = () => {
    setscore(score+1)
  }
   const HandleNoBallRun = () => {
    setscore(score+1)
  }
  const HandleWideBallRun = () => {
    setscore(score+1)
  }
  
 
  const [Wickets, setWickets] = useState(0)
  const incWickets = () => {
    setWickets(Wickets + 1)
    setballs(balls + 1)
  }
 
 
  return (
    <div>
    <h1>Score Board</h1>
    <h2>Score: {score}</h2>
    {/* <h2>Overs: 0</h2> */}
    <h2>Balls: {balls}</h2>
    <h2>Wickets: {Wickets}</h2>
    <button onClick={ () => { HandleRun(0)}}>Run: 0</button>
    <button onClick= {() => { HandleRun(1)}}>Runs: 1</button>
    <button onClick= {() => { HandleRun(2)}}>Runs: 2</button>
    <button onClick= {() => { HandleRun(3)}}>Runs: 3</button>
    <button onClick= {() => { HandleRun(4)}}>Runs: 4</button>
    <button onClick= {() => { HandleRun(5)}}>Runs: 5</button>
    <button onClick= {() => { HandleRun(6)}}>Runs: 6</button>
    <br></br>

    <button onClick={HandleByeRun}>Bye</button>
    <button onClick= {HandleNoBallRun}> No Ball</button>
    <button onClick= {HandleWideBallRun}>Wide Ball</button>
    <br></br>
    <button onClick={ () => { incWickets()}}>Wicket</button>
    </div>
  )
}
export {Meow}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RiFacebookFill } from 'react-icons/ri'

const Meow= () => {
  const [score, setscore] = useState(0)
  const [balls, setballs] = useState(0)

  const HandleZeroRun = () => {
    setscore(score + 0)
    setballs(balls + 1)

  }
  const HandleOneRun = () => {
    setscore(score+1)
    setballs(balls+1)
  }
  const HandleTwoRun = () => {
    setscore(score+2)
    setballs(balls+1)
  }
  const HandleThreeRun = () => {
    setscore(score+3)
    setballs(balls+1)
  }
  const HandleFourRun = () => {
    setscore(score+4)
    setballs(balls+1)
  }
  const HandleFiveRun = () => {
    setscore(score+5)
    setballs(balls+1)
  }
  const HandleSixRun = () => {
    setscore(score+6)
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
    <button onClick={ () => { HandleZeroRun()}}>Run: 0</button>
    <button onClick= {() => { HandleOneRun()}}>Runs: 1</button>
    <button onClick= {() => { HandleTwoRun()}}>Runs: 2</button>
    <button onClick= {() => { HandleThreeRun()}}>Runs: 3</button>
    <button onClick= {() => { HandleFourRun()}}>Runs: 4</button>
    <button onClick= {() => { HandleFiveRun()}}>Runs: 5</button>
    <button onClick= {() => { HandleSixRun()}}>Runs: 6</button>
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

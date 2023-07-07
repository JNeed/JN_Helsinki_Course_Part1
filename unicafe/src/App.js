import { useState } from 'react'


const Statistics = (props) => {

  const calcPercentPositive = (props) => {
    let percentPositive = 0;
    if (props.numResponses > 0){
      percentPositive = props.good / props.numResponses * 100;
    }
    return(
      <p> Percent positive: {percentPositive}</p>
    )
  }

  const calcAverage = (props) => {
    let average = 0;
    if (props.numResponses > 0) {
      average = props.score / props.numResponses;
    }
    return (
    <p>
      Average: {average}
    </p>)}

  return (
    <>
    <h1>Statistics</h1>
    <div>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      {calcAverage(props)}
      {calcPercentPositive(props)}
    </div>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [score, setScore] = useState(0)
  const [numResponses, setNumResponses] = useState(0)

  const handleGood = () => {
    setGood(good+1)
    setScore(score+1)
    setNumResponses(numResponses + 1)
  }

  const handleBad = () => {
    setBad(bad+1)
    setScore(score-1)
    setNumResponses(numResponses + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
    setNumResponses(numResponses + 1)
  }




  return (
    <div>
      <h1>Leave Feedback</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} score = {score }numResponses={numResponses} />
      <div>
        <button onClick = {handleGood}> Good </button>
        <button onClick = {handleBad}> Bad </button>
        <button onClick = {handleNeutral}> Neutral </button>
      </div>
      {/* 
      <h2> Statistics </h2>
      <p>Good {good}</p>
      <p> Bad {bad}</p>
      <p> Neutral {neutral}</p>
      <p> Score {score}</p>
      {calcAverage()}
      {calcPercentPositive()} */}
    </div>
  )
}

export default App
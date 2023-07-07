import { useState } from 'react'

const Button = (props) => {
  return(
    <>
      <button onClick = {props.handleClick}>{props.text}</button>
    </>
  )
}

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

  const displayStats = (props) => {

    if ((props.good + props.bad + props.neutral)>0) {
      return(
      <>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        {calcAverage(props)}
        {calcPercentPositive(props)}
      </>
      )
    }
    return (
      <>
        <p></p>
        No feedback given yet.
      </>
    )

  }

  return (
    <>
      {displayStats(props)}
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
      
      <div>
        <Button handleClick = {handleGood} text = 'Good' />
        <Button handleClick = {handleBad} text = 'Bad' />
        <Button handleClick = {handleNeutral} text = 'Neutral' />
      </div>
      <Statistics good = {good} neutral = {neutral} bad = {bad} score = {score }numResponses={numResponses} />
    </div>
  )
}

export default App
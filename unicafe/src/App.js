import { useState } from 'react'

const StatisticsLine = (props) => {
  return (<p>{props.text}: {props.value}</p>)
}

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
      <>{percentPositive}</>
    )
  }

  const calcAverage = (props) => {
    let average = 0;
    if (props.numResponses > 0) {
      average = props.score / props.numResponses;
    }
    return (
      <>{average}</>
      )}

  const displayStats = (props) => {

    if ((props.good + props.bad + props.neutral)>0) {
      return(
      <>
        <h2>Statistics</h2>
          <StatisticsLine text = 'Good' value = {props.good} />
          <StatisticsLine text = 'Neutral' value = {props.neutral} />
          <StatisticsLine text = 'Bad' value = {props.bad} />
          <StatisticsLine text = 'Average' value = {calcAverage(props)} />
          <StatisticsLine text = 'Percent positive' value = {calcPercentPositive(props)}/>
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
        <Button handleClick = {handleNeutral} text = 'Neutral' />
        <Button handleClick = {handleBad} text = 'Bad' />
      </div>
      <Statistics good = {good} neutral = {neutral} bad = {bad} score = {score }numResponses={numResponses} />
    </div>
  )
}

export default App
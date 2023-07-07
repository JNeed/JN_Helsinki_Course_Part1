import { useState } from 'react'

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

  const calcAverage = () => {
    let average = 0;
    if (numResponses > 0) {
      average = score / numResponses;
    }
    return (
    <p>
      Average: {average}
    </p>)}

    const calcPercentPositive = () => {
      let percentPositive = 0;
      if (numResponses > 0){
        percentPositive = good / numResponses * 100;
      }
      return(
        <p> Percent positive: {percentPositive}</p>
      )
    }

  return (
    <div>
      <h1>Leave Feedback</h1>
      <div><button onClick = {handleGood}> Good </button>
      <button onClick = {handleBad}> Bad </button>
      <button onClick = {handleNeutral}> Neutral </button>
      </div>
      <h2> Statistics </h2>
      <p>Good {good}</p>
      <p> Bad {bad}</p>
      <p> Neutral {neutral}</p>
      <p> Score {score}</p>
      {calcAverage()}
      {calcPercentPositive()}
    </div>
  )
}

export default App
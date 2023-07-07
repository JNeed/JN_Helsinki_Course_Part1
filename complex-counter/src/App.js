import {useState} from 'react'
const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [clicks, setClicks] = useState({
    left:0,right:0
  })
  const [allClicks, setAll] = useState([])


  const handleLeftClick = () => {
  
    const newClicks = {
      ...clicks, // I think this technically expands to left:clicks.left, right:clicks.right, 
      // left:clicks.left+1, but the first left:clicks.left doesn't do anything, it just sets the variable
      // it its current value and then we increment it later with left:clicks.left+1
      left: clicks.left+1
      // right: clicks.right
    }
    setClicks(newClicks)
    setAll(allClicks.concat('L'))
  }
  const handleRightClick = () => {
    const newClicks = {
      // left:clicks.left,
      ...clicks,
      right:clicks.right+1
    }
    setClicks(newClicks)
    setAll(allClicks.concat('R'))
  }
  return (
    <div>
      {clicks.left}
      <button onClick= {handleLeftClick}>
        left
      </button>
      <button onClick = {handleRightClick}>
        right
      </button>
      {clicks.right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
    
}

export default App;

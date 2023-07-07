import {useState} from 'react'
const App = () => {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const Button = ({handleClick, text}) => {
      return(<button onClick = {handleClick}>{text}</button>)
  }
  const History = (props) => {
    if (props.allClicks.length === 0){
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }

  const handleLeftClick = () => {
    setLeft(left+1)
    setAll(allClicks.concat('L'))
    setTotal(left+right)
  }
  const handleRightClick = () => {
    setRight(right+1)
    setAll(allClicks.concat('R'))
    setTotal(left+right)
  }
  return (
    <div>
      {left}
      <Button handleClick = {handleLeftClick} text='left' />
      <Button handleClick = {handleRightClick} text='right' />
      {right}
      <History allClicks = {allClicks} />
    </div>
  )
    
}

export default App;

import {useState} from 'react'
const Button = ({handleClick, text}) =>{
  return (
    <button onClick = {handleClick}>
      {text}
    </button>
  )
}
const Display = ({counter}) =>{
  return (
    <div>{counter}</div>
  )
}
const App = () => { // the component function; it's almost like we're setting a variable's val to a
  // fxn call; that fxn takes no params as shown by ()
  const [counter, setCounter] = useState(0) // destructuring on the left; counter is a state variable
  // setCounter is a state fxn that sets the counter to whatever we pass in it (it does exactly as
  // it says)

  // setTimeout( //setTimeout is like calling sleep for arg2 ms and then execute the fxn passed as arg1
    // () => setCounter(counter+1), // I think this is just like passing a lambda function
    // 1000
  // )
  console.log('rendering with counter value ', counter)

  const increaseByOne = () => {
    console.log('increasing, value before ', counter)
    setCounter(counter+1)
  }
  const zero = () => {
    console.log('resetting to zero, value before ', counter)
    setCounter(0)
  }

  const decreaseByOne = () => {
    console.log('decreasing, value before ', counter)
    setCounter(counter-1)
  }
return(
  <div>
  <Display counter = {counter} /> 
  <Button handleClick = {increaseByOne} text = 'plus' />
  <Button handleClick ={zero} text = 'zero' />
  <Button handleClick={decreaseByOne} text = 'minus' />
  </div>
)
}
export default App;

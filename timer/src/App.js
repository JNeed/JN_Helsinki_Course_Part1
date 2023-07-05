import {useState} from 'react'
const App = () => { // the component function; it's almost like we're setting a variable's val to a
  // fxn call; that fxn takes no params as shown by ()
  const [counter, setCounter] = useState(0) // destructuring on the left; counter is a state variable
  // setCounter is a state fxn that sets the counter to whatever we pass in it (it does exactly as
  // it says)

  setTimeout( //setTimeout is like calling sleep for arg2 ms and then execute the fxn passed as arg1
    () => setCounter(counter+1), // I think this is just like passing a lambda function
    1000
  )
  console.log('rendering... ', counter)
return(
  <div>{counter}</div>
)
}
export default App;

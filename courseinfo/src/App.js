const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
} 

const Content = (props) => {
  return (
    <div>
      <p>{props.part}</p>
    </div>
  );
}

const Total = (props) => {
  return(
    <div>
      <p>{props.exercise}</p>
    </div>
  );
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <p>
        <Content part = {part1} /> <Total exercise={exercises1} />
      </p>
      <p>
        <Content part = {part2}/> <Total exercise={exercises2} />
      </p>
      <p>
        <Content part = {part3} /> <Total exercise={exercises3} />
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
}

export default App;

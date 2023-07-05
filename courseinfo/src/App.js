const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
} 

const Part = (props) => {
  console.log('Entered Part component');
  return (
  <div>
    <p>{props.partName} {props.numExercises}</p>
  </div>
  );
}

const Content = (props) => {
  return (
    <div>
      <Part partName = {props.parts[props.index]} numExercises = {props.totals[props.index]} />
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
  const parts = [part1, part2, part3];
  const totals = [exercises1, exercises2, exercises3, exercises1+exercises2+exercises3];
  const contentComponents = [];
  for (let i =0; i < 3; i++){
    contentComponents.push(<Content parts={parts} totals={totals} index={i} />)
  }
  return (
    <div>
      <Header course={course} />
      {contentComponents}
    </div>
  );
}

export default App;

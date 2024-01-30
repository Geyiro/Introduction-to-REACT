const Course = ({ course }) =>{
  return (
    <div>
      <Header name={course.name}/>
      <Content course={course.parts}/>
    </div>
  )
}

const Header = (props) =>{
  return(
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  const partsExcercises = props.course.map(course => course.exercises)
  const sumTotal = partsExcercises.reduce((sum, excercise) => sum + excercise, 0)

  console.log('Content component', props, props.course, sumTotal)

  return(
    <div>
      <Part name={props.course[0].name} exercises={props.course[0].exercises}/>
      <Part name={props.course[1].name} exercises={props.course[1].exercises}/>
      <Part name={props.course[2].name} exercises={props.course[2].exercises}/>
      <b>total of {sumTotal} exercises</b>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} = {props.exercises}</p>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = (course) =>{
    return (
      <h1>{course.course}</h1>
    )
  }

  const Content = (parts) =>{
    return (
      <div>
        <br></br>
        <p>{parts.parts[0].name} : {parts.parts[0].exercises}</p>
        <p>{parts.parts[1].name} : {parts.parts[1].exercises}</p>
        <p>{parts.parts[2].name} : {parts.parts[2].exercises}</p>
        <br></br>
      </div>
    )
  }

  const Total = (parts) =>{
    return(
      <h3>Number of exercises : {parts.parts[0].exercises + parts.parts[1].exercises + parts.parts[2].exercises}</h3>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App
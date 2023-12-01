const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <h1>{course.name}</h1>
      <br></br>
      <p>{course.parts[0].name} : {course.parts[0].exercises}</p>
      <p>{course.parts[1].name} : {course.parts[1].exercises}</p>
      <p>{course.parts[2].name} : {course.parts[2].exercises}</p>
      <br></br>
      <h3>Number of exercises : {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</h3>
    </div>
  )
}

export default App
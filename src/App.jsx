const Course = ( props ) =>{
  return (
    <div>
      { props.courses.map(course => (
        <div key={course.id}>
          <h1>{course.name}</h1>
          <Content parts={course.parts}/>
         <span></span>
        </div>
      )) }
    </div>
  )
}

const Content = (props) => {
  const partsExcercises = props.parts.map(part => part.exercises)
  console.log(partsExcercises)
  const sumTotal = partsExcercises.reduce((sum, excercise) => sum + excercise, 0)

  return(
    <div>
      { props.parts.map(part => (
        <p key={part.id}>{part.name} : {part.exercises}</p>
      ))}
      <b>Total of {sumTotal} exercises</b>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App
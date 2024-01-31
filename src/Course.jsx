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

export default Course
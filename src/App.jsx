const App = () => {

  
  const Header = () => {
    const course = 'Half Stack application development'
    return (
      <h1>{course}</h1>
    )
  }
  
  const Part = (props) => {
    console.log(props)
    return (
      <p>{props.name} : {props.excercises}</p>
    )  
  }

  const Content = () => {
    return (
      <div>
        <Part name='Fundamentals of React' excercises='10'/>
        <Part name='Using props to pass data' excercises='7'/>
        <Part name='State of a component' excercises='14'/>
      </div>
    )
  }
  const Total=() => {
    const exercises1 = 10
    const exercises2 = 7
    const exercises3 = 14
    return (
      <div>
        <p>Number of excercises : {exercises1 + exercises2 + exercises3}</p>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App
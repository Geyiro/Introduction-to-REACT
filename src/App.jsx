const App = () => {

  
  const Header = () => {
    const course = 'Half Stack application development'
    return (
      <div>
        <p>{course}</p>
      </div>
    )
  }
  const Content = () => {
    return (
      <div>
        <p>Fundamentals of React : 10</p>
        <p>Using props to pass data : 7</p>
        <p>State of a component : 14</p>
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
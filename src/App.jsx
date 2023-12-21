import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick= {() => setGood(good + 1)} text="good" />
      <Button handleClick= {() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick= {() => setBad(bad + 1)} text="bad" />
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>ALL : {good + neutral + bad}</p>
      <p>AVERAGE : {(good - bad)/(good + neutral + bad)}</p>
      <p>POSITIVE : {(good*100)/(good + neutral + bad)}%</p>
    </div>
  )
}

export default App
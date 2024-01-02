import { useState } from 'react'

const Statisticline = (props) => {
  console.log('the name of text is',props.text)
  if(props.text == "Positive"){
    return(
      <p>{props.text} : {props.value}%</p> 
    )
  }
  return (
    <p>{props.text} : {props.value}</p> 
  )
}

const Statistics = (props) => {
  if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }else{
    return (
      <div>
        <h2>Statistics</h2>
        <Statisticline text="Good" value={props.good}/>
        <Statisticline text="Neutral" value={props.neutral}/>
        <Statisticline text="Bad" value={props.bad}/>
        <Statisticline text="All" value={props.good + props.neutral + props.bad}/>
        <Statisticline text="Average" value={(props.good - props.bad)/(props.good + props.neutral + props.bad)}/>
        <Statisticline text="Positive" value={(props.good*100)/(props.good + props.neutral + props.bad)}/>
      </div>
    )
  }
}

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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
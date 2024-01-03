import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

const App = () => {
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState({})

  const getRandomInt = () => Math.floor(Math.random() * anecdotes.length)

  const handleVote = (anecdoteIndex) => {
    const currentVotes = voted[anecdoteIndex]
    const votesCopy = {...voted}

    if (currentVotes) {
      votesCopy[anecdoteIndex] += 1
    } else {
      votesCopy[anecdoteIndex] = 1
    }

    setVoted(votesCopy)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {voted[selected] ?? 0} votes</p>
      <Button handleClick= {() => handleVote(selected)} text="vote"/>
      <Button handleClick= {() => setSelected(getRandomInt())} text="next anecdote"/>
    </div>
  )
}

export default App
import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
      .then(response => {
        setJokes(response.data)
      })
      .catch(error => {
        console.error('Error fetching jokes:', error)
      })
  }, [])

  return (
    <>
      <h1>Joke Generator</h1>
      <p>Jokes: {jokes.length}</p>
      {
        jokes.map(joke => (
          <div key={joke.id}>
            <h3>{joke.setup}</h3>
            <p>{joke.punchline}</p>
          </div>
        ))
      }
    </>
  )
}

export default App

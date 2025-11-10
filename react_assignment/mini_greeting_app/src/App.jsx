import { useState } from 'react'
import GreetingForm from './components/GreetingForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Mini Greeting Application</h2>
    <GreetingForm></GreetingForm>
    </>
  )
}

export default App

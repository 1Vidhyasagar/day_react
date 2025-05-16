import { useState } from 'react'

import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>
        Hello React
      </h1>
    <Card name="Vidhyasagar" role="Full stack dev"/>
    <Card name="Alice" role="Designer"/>
    <h2>Counter : {count}</h2>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>

    </div>
    </>
  )
}

export default App

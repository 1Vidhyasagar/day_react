import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello React</h1>
        <Card name="Vidhyasagar" role="Full stack dev" age={29} location="Bangalore" />
        <Card name="Alice" role="Designer" age={24} location="Bangalore" />
        <h2>Counter : {count}</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>
    </>
  );
}

export default App

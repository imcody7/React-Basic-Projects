import React, { useState } from 'react'

export default function Counter() {
  const [counter,setCounter] = useState(0);

  const handleCounter = (value) => {
    setCounter((prev) => prev + value)
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => handleCounter(1)}>ADD</button>
      <button onClick={() => handleCounter(-1)}>REDUCE</button>
      <button onClick={() => setCounter(0)}>RESET</button>
    </div>
  )
}

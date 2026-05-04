import { useEffect, useState } from 'react'

export function CounterDisplay({ counter }) {
  return <h2>{counter}</h2>
}

export function Counter() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('Valore contatore:', counter)
  }, [counter])

  function handleCounterIncrement() {
    setCounter(counter + 1)
  }

  function handleDecrement() {
    setCounter(counter - 1)
  }

  function handleReset() {
    setCounter(0)
  }

  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrementa</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}
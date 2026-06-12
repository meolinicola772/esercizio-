import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const counterStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: count < 0 ? 'red' : count === 0 ? 'black' : 'green',
    padding: '10px 20px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    display: 'inline-block',
    textAlign: 'center',
  }

  return (
    <div>
      <p style={counterStyle}>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter
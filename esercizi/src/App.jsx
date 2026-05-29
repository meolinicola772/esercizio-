import { Login } from "./assets/login"

function App() {

   const { count, aumenta, reset, diminuisci } = useCounter()

   return (
      <h1>{count}</h1>
      <button onClick={aumenta}>+</button>
      <button onClick={reset}>0</button>
      <button onClick={diminuisci}>-</button>
   )
}
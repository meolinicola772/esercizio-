import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { CounterDisplay } from "./CounterDisplay";

function App() {
  return (
    <div>
      <Counter vIniziale={0} incremento={1}></Counter>
      <Clock></Clock>
    </div>
  );
}

export default App;

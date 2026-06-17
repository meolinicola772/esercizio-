import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  reset,
} from "../slices/counterSlice";

function ReduxCounter() {

  const value = useSelector(
    state => state.counter.value
  );

  const dispatch = useDispatch();

  return (
    <div>

      <h2>Counter</h2>

      <h1>{value}</h1>

      <button onClick={() => dispatch(increment())}>
        +
      </button>

      <button onClick={() => dispatch(decrement())}>
        -
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>

    </div>
  );
}

export default ReduxCounter;
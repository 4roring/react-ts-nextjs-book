import { useState, useReducer } from "react";

type Action = "DECREMENT" | "INCREMENT" | "DOUBLE" | "RESET";

const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case "DECREMENT":
      return currentCount - 1;
    case "INCREMENT":
      return currentCount + 1;
    case "DOUBLE":
      return currentCount * 2;
    case "RESET":
      return 0;
    default:
      throw currentCount;
  }
};

type CounterProps = {
  initalValue: number;
};

const Counter = (props: CounterProps) => {
  const { initalValue } = props;
  const [count, setCount] = useState(initalValue);
  const [count2, dispatch] = useReducer(reducer, initalValue);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <p>Count: {count2}</p>
      <button onClick={() => dispatch("DECREMENT")}>-</button>
      <button onClick={() => dispatch("INCREMENT")}>+</button>
      <button onClick={() => dispatch("DOUBLE")}>x2</button>
      <button onClick={() => dispatch("RESET")}>reset</button>
    </div>
  );
};

export default Counter;

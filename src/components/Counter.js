import { useSelector, useDispatch } from "react-redux";

import classes from './Counter.module.css';

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  function incrementHandler() {
    dispatch({ type: "INCREMENT" });
  }

  function decrementHandler() {
    dispatch({ type: "DECREMENT" });
  }

  function increaseHandler() {
    dispatch({ type: "INCREASE", amount: 5 });
  }

  function toggleCounterHandler() {

  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

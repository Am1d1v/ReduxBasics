import classes from "./Counter.module.css";
import {useSelector, useDispatch} from "react-redux";

const Counter = () => {

  // Action
  const dispatchFn = useDispatch();

  // Counter State
  const counter =  useSelector((state) => {
    return state.counter;
  });


  // Dispatch Increment Function
  const incrementFn  = () => {
    dispatchFn({type: "increment"})
  };

  // Dispatch Decrement Function
  const decrementFn  = () => {
    dispatchFn({type: "decrement"})
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Счётчик</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementFn}>+</button>
        <button onClick={decrementFn}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Спрятать / Показать</button>
    </main>
  );
};

export default Counter;

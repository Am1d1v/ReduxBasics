import classes from "./Counter.module.css";
import {useSelector } from "react-redux";

const Counter = () => {

  const counter =  useSelector((state) => {
    return state.counter;
  });

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Счётчик</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Спрятать / Показать</button>
    </main>
  );
};

export default Counter;

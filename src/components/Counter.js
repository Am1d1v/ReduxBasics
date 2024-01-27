import classes from "./Counter.module.css";
import {useSelector, useDispatch} from "react-redux";
import { counterActions } from "../store/inde";



// Functionnal Way Redux
const Counter = () => {

  // Action
  const dispatchFn = useDispatch();

  // Counter State Selector
  const counter =  useSelector((state) => {
    return state.counter;
  });

  // Counter Visibility Selector
  const isCounterInvisible = useSelector(state => state.isCounterInvisible);

  // Dispatch Increment Function
  const incrementFn  = () => {
    dispatchFn(counterActions.increment())
  };

  // Dispatch Decrement Function
  const decrementFn  = () => {
    dispatchFn(counterActions.decrement())
  };

  // Dispatch Increment by 10 Function
  const increaseHandler = () => {
    dispatchFn(counterActions.increase())
  }

  // Dispatch Component Visibility
  const toggleCounterHandler = () => {
    dispatchFn(counterActions.setCounterVisibility())
  };

  return (
    <main className={classes.counter}>
      <h1>Счётчик</h1>
      {!isCounterInvisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementFn}>+</button>
        <button onClick={increaseHandler}>+10</button>
        <button onClick={decrementFn}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Спрятать / Показать</button>
    </main>
  );
};

// Class Way Redux
// class Counter extends Component {

//   incrementFn(){
//     this.props.increment();
//   }

//   decrementFn(){
//     this.props.decrement();
//   }

//   toggleCounterHandler(){

//   }

//     render(){
//       return (
//         <main className={classes.counter}>
//           <h1>Счётчик</h1>
//           <div className={classes.value}>{this.props.counter}</div>
//           <div>
//             <button onClick={this.incrementFn.bind(this)}>+</button>
//             <button onClick={this.decrementFn.bind(this)}>-</button>
//           </div>
//           <button onClick={this.toggleCounterHandler}>Спрятать / Показать</button>
//         </main>
//       );
//     };
// }

// const bindStateToProps =(state) => {
//   return{
//     counter: state.counter
//   }
// }

// const bindDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({type: "increment"}),
//     decrement: () => dispatch({type: "decrement"})
//   }
// }

// export default connect(bindStateToProps, bindDispatchToProps)(Counter);
export default Counter;

import classes from "./Counter.module.css";
import {useSelector, useDispatch, connect} from "react-redux";
import { Component } from "react";



// Functionnal Way Redux
// const Counter = () => {

//   // Action
//   const dispatchFn = useDispatch();

//   // Counter State
//   const counter =  useSelector((state) => {
//     return state.counter;
//   });


//   // Dispatch Increment Function
//   const incrementFn  = () => {
//     dispatchFn({type: "increment"})
//   };

//   // Dispatch Decrement Function
//   const decrementFn  = () => {
//     dispatchFn({type: "decrement"})
//   };

//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Счётчик</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incrementFn}>+</button>
//         <button onClick={decrementFn}>-</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Спрятать / Показать</button>
//     </main>
//   );
// };

// Class Way Redux
class Counter extends Component {

  incrementFn(){
    this.props.increment();
  }

  decrementFn(){
    this.props.decrement();
  }

  toggleCounterHandler(){

  }

    render(){
      return (
        <main className={classes.counter}>
          <h1>Счётчик</h1>
          <div className={classes.value}>{this.props.counter}</div>
          <div>
            <button onClick={this.incrementFn.bind(this)}>+</button>
            <button onClick={this.decrementFn.bind(this)}>-</button>
          </div>
          <button onClick={this.toggleCounterHandler}>Спрятать / Показать</button>
        </main>
      );
    };
}

const bindStateToProps =(state) => {
  return{
    counter: state.counter
  }
}

const bindDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: "increment"}),
    decrement: () => dispatch({type: "decrement"})
  }
}

export default connect(bindStateToProps, bindDispatchToProps)(Counter);

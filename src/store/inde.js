import { createSlice, configureStore } from '@reduxjs/toolkit';


// Initial state
const initialState = {
    counter: 0, 
    isCounterInvisible: false
}

// State Slice
const counterSlice =  createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload.number;
        },
        setCounterVisibility(state){
            state.isCounterInvisible = !state.isCounterInvisible;
        }
    }
})

// Reducer Function
// const counterReducer = (state = initialState, action) => {

//     // Increase Counter by 1
//     if(action.type === 'increment'){
//         return state = {
//             counter: state.counter + 1,
//             isCounterInvisible: state.isCounterInvisible
//         }
//     }

//     // Increase By 10
//     if(action.type === 'increase'){
//         return state = {
//             counter: state.counter + action.number,
//             isCounterInvisible: state.isCounterInvisible
//         }
//     }

//     // Decrease Counter by 1
//     if(action.type === 'decrement'){
//         return state = {
//             counter: state.counter - 1,
//             isCounterInvisible: state.isCounterInvisible
//         }
//     }

//     // Component Visibility Toggle
//     if(action.type === 'visibility'){
//         return state = {
//             counter: state.counter,
//             isCounterInvisible: !state.isCounterInvisible
//         }
//     }

//     return state;
// };

// Store

// Counter Actions
export const counterActions = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer
});


export default store;
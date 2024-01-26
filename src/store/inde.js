import {legacy_createStore} from 'redux';

// Initial state
const initialState = {
    counter: 0, 
    isCounterInvisible: false
}

// Reducer Function
const counterReducer = (state = initialState, action) => {

    // Increase Counter by 1
    if(action.type === 'increment'){
        return state = {
            counter: state.counter + 1,
            isCounterInvisible: state.isCounterInvisible
        }
    }

    // Increase By 10
    if(action.type === 'increase'){
        return state = {
            counter: state.counter + action.number,
            isCounterInvisible: state.isCounterInvisible
        }
    }

    // Decrease Counter by 1
    if(action.type === 'decrement'){
        return state = {
            counter: state.counter - 1,
            isCounterInvisible: state.isCounterInvisible
        }
    }

    // Component Visibility Toggle
    if(action.type === 'visibility'){
        return state = {
            counter: state.counter,
            isCounterInvisible: !state.isCounterInvisible
        }
    }



    return state;
};

// Store
const store = legacy_createStore(counterReducer);

export default store;
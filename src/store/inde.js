import {legacy_createStore} from 'redux';


// Reducer Function
const counterReducer = (state = {counter: 0}, action) => {

    // Increase Counter by 1
    if(action.type === 'increment'){
        return state = {
            counter: state.counter + 1
        }
    }

    // Decrease Counter by 1
    if(action.type === 'decrement'){
        return state = {
            counter: state.counter - 1
        }
    }

    return state;
};

// Store
const store = legacy_createStore(counterReducer);

export default store;
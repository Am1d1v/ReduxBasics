import redux from 'redux';


// Reducer Function
const counterReducer = (state = {counter: 0}, action) => {

    // Increase Counter by 1
    if(action.type === 'increment'){
        return state = {
            counter: state.counter + 1
        }
    }

    // Decrease Counter by 1
    if(action.type === 'increment'){
        return state = {
            counter: state.counter + 1
        }
    }
};

// Store
const store = redux.createStore();
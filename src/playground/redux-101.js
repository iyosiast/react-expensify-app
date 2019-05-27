import {createStore} from 'redux';

// Action Generators  - functions that return action objects

// payload has to be intialized to empty otherwise it will throw an error
// if incrementBy is not passed

const incrementCount = ({ incrementBy = 1 } ={}) => ({
    type : 'INCREMENT',
    incrementBy
});


const decrementCount = ({ decrementBy = 1 } ={}) => ({
    type : 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type : 'SET',
    count
});

const resetCount = () => ({
    type : 'RESET'
});

// Reducers
// 1. Reducers are pure function
// 2. Never change state or action

const countReducer = ((state = { count :0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count : state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count : state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count : 0
            };
        case 'SET':
            return {
                count : action.count
            };
        
        default:
            return state
    }
});

const store = createStore(countReducer);

// Do Something when the state changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy : 5}));

// Suspend the action when the state changes
//unsubscribe();
store.dispatch(decrementCount({ decrementBy : 10}));


store.dispatch(decrementCount());

store.dispatch(incrementCount());

store.dispatch(resetCount());


store.dispatch(setCount({ count : 105 }));

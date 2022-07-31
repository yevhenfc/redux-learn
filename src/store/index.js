import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from "redux";

const initialState = {
   value: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': return {value: state.value + 1};
        case 'SUB': return {value: state.value - 1};
        default:    return {value: state.value};
    }
};

// const store = createStore(reducer);
const store = configureStore({reducer: reducer});
export default store;
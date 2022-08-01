import { configureStore } from '@reduxjs/toolkit';
import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
   value: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.COUNTER_ADD: return {value: state.value + 1};
        case ACTION_TYPES.COUNTER_SUB: return {value: state.value - 1};
        default:    return {value: state.value};
    }
};

// const store = createStore(reducer);
const store = configureStore({reducer: reducer});
export default store;
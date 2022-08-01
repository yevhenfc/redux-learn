import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
    value: 0,
    step: 1,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.COUNTER_ADD: return {...state, value: state.value + state.step};
        case ACTION_TYPES.COUNTER_SUB: return {...state, value: state.value - state.step};
        case ACTION_TYPES.COUNTER_SET_STEP: return {...state, step: action.value};
        default:    return state;
    }
};

export default counterReducer;
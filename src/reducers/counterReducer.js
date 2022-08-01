import ACTION_TYPES from "../actions/actionTypes";

const initialState = {value: 0}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.COUNTER_ADD: return {value: state.value + 1};
        case ACTION_TYPES.COUNTER_SUB: return {value: state.value - 1};
        default:    return {value: state.value};
    }
};

export default counterReducer;
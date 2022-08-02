import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
    value: 0,
    step: 1,
    isLigth: false,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.COUNTER_ADD:      return {...state, value: state.value + state.step};
        case ACTION_TYPES.COUNTER_SUB:      return {...state, value: state.value - state.step};
        case ACTION_TYPES.COUNTER_SET_STEP: return {...state,  step: action.value};
        case ACTION_TYPES.THEME_SWITCHER_SET_THEME: return {isLigth: !state.isLigth};
        default:    return state;
    }
};

export default counterReducer;
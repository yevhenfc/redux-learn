import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
    isLight: true,
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_THEME: return {...state, isLight: !action.isLight};
        default:    return state;
    }
};

export default themeReducer;
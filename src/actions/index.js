import ACTION_TYPES from "./actionTypes";
export const add = () => ({type: ACTION_TYPES.COUNTER_ADD});
export const sub = () => ({type: ACTION_TYPES.COUNTER_SUB});
export const setStep = (newStep) => ({
    type: ACTION_TYPES.COUNTER_SET_STEP,
    value: newStep,
});
export const setTheme = (isLight) => ({
    type: ACTION_TYPES.SET_THEME,
    isLight: isLight
});

export const createUser = (newUser) => {
    return{
        type: ACTION_TYPES.CREATE_USER,
        data: newUser,
    }
};

export const updateUser = (newData) => {
    return{
        type: ACTION_TYPES.UPDATE_USER,
        data: newData
    }
}
export const deleteUser = (id) => {
    return{
        type: ACTION_TYPES.DELETE_USER,
        id: id,
    }
}
export const getUser = (id) => {
    return{
        type: ACTION_TYPES.READ_USER,
        id: id,
    }
}
import ACTION_TYPES from "./actionTypes";

export const add = () => ({type: ACTION_TYPES.COUNTER_ADD});
export const sub = () => ({type: ACTION_TYPES.COUNTER_SUB});
export const setStep = (newStep) => ({
    type: ACTION_TYPES.COUNTER_SET_STEP,
    value: newStep,
});
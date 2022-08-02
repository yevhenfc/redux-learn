import counterReducer from "./counterReducer";
import { combineReducers } from "redux";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
    counterReducer: counterReducer,
    themeReducer: themeReducer,
})

export default rootReducer;
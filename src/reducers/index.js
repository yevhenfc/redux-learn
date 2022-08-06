import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import themeReducer   from "./themeReducer";
import userReducer    from "./userReducer";

const rootReducer = combineReducers({
    counterReducer: counterReducer,
    themeReducer  : themeReducer,
    userReducer   : userReducer,
})

export default rootReducer;
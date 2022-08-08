import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import themeReducer   from "./themeReducer";
import userReducer    from "./userReducer";
import userDataReducer    from "./userDataReducer";


const rootReducer = combineReducers({
    counterReducer: counterReducer,
    themeReducer  : themeReducer,
    user   : userReducer,
    userData: userDataReducer,
})

export default rootReducer;
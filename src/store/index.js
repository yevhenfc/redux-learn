import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../reducers/counterReducer';
import rootReducer from '../reducers';

// const store = configureStore({reducer: counterReducer});
const store = configureStore({reducer: rootReducer});
export default store;
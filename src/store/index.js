import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterReducer';

// const store = createStore(reducer);
const store = configureStore({reducer: counterReducer});
export default store;
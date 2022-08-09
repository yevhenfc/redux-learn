import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../reducers/counterReducer';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware } from 'redux';

const saga = createSagaMiddleware;
const store = configureStore({reducer: rootReducer}, applyMiddleware(saga));
saga.run(rootSaga);

export default store;
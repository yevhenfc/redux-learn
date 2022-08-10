import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({reducer : rootReducer}, 
    applyMiddleware(sagaMiddleware),
    sagaMiddleware.run);
sagaMiddleware.run(rootSaga);

const store = configureStore({reducer : rootReducer}, composeWithDevTools(applyMiddleware));


export default store;

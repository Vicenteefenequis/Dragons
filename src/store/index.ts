import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducers from './persistReducers';

const persistedReducer = persistReducers(rootReducer);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export { store };

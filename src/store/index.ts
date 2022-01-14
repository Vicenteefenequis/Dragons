import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import persistReducers from './persistReducers';

const persistedReducer = persistReducers(rootReducer);

const store = createStore(persistedReducer);

export { store };

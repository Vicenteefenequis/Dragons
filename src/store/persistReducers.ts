import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { RootState } from './modules/rootTypes';

export default (reducers: any): any => {
  const persistedReducer = persistReducer<RootState>(
    {
      key: '@dragons-code-wapp',
      storage,
      whitelist: ['user'],
    },
    reducers,
  );

  return persistedReducer;
};

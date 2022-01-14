import { all, debounce, put } from 'redux-saga/effects';
import { getDragons } from '../../../repositories';
import { UpdateDragons } from './actions';
import { GetDragonsAction } from './types';

function* GetDragonsSaga() {
  const { dragons } = yield getDragons();
  yield put(UpdateDragons(dragons));
}

export const dragonsSaga = all([
  debounce<GetDragonsAction['type'], typeof GetDragonsSaga>(
    1000,
    '@dragons/GET_DRAGONS_ACTION',
    GetDragonsSaga,
  ),
]);

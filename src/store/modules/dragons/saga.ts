import { all, put, takeLatest } from 'redux-saga/effects';
import { createDragon, getDragons } from '../../../repositories';
import { UpdateRequestStatus } from '../app';
import { UpdateDragons } from './actions';
import { GetDragonsAction } from './types';
import { CreateDragonAction, GetDragons } from '.';

function* GetDragonsSaga() {
  yield put(UpdateRequestStatus('PENDING'));

  const { dragons } = yield getDragons();
  yield put(UpdateDragons(dragons));

  yield put(UpdateRequestStatus('RESOLVE'));
}

function* CreateDragonSaga({ payload }: CreateDragonAction) {
  yield put(UpdateRequestStatus('PENDING'));

  const { status } = yield createDragon(payload);

  yield put(UpdateRequestStatus(status));
  yield put(GetDragons());
}

export const dragonsSaga = all([
  takeLatest<CreateDragonAction['type'], typeof CreateDragonSaga>(
    '@dragons/CREATE_DRAGON_ACTION',
    CreateDragonSaga,
  ),
  takeLatest<GetDragonsAction['type'], typeof GetDragonsSaga>(
    '@dragons/GET_DRAGONS_ACTION',
    GetDragonsSaga,
  ),
]);

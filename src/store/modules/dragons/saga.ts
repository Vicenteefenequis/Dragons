import { all, put, takeLatest } from 'redux-saga/effects';
import {
  createDragon,
  deleteDragon,
  getDragons,
  updateDragon,
} from '../../../repositories';
import { UpdateRequestStatus } from '../app';
import { UpdateDragons } from './actions';
import { GetDragonsAction } from './types';
import {
  CreateDragonAction,
  DeleteDragonAction,
  GetDragons,
  PutDragonAction,
} from '.';

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

function* DeleteDragonSaga({ payload }: DeleteDragonAction) {
  yield deleteDragon(payload.id);
}

function* PutDragonSaga({ payload }: PutDragonAction) {
  yield updateDragon(payload);
}

export const dragonsSaga = all([
  takeLatest<CreateDragonAction['type'], typeof CreateDragonSaga>(
    '@dragons/CREATE_DRAGON_ACTION',
    CreateDragonSaga,
  ),
  takeLatest<DeleteDragonAction['type'], typeof DeleteDragonSaga>(
    '@dragons/DELETE_DRAGON_ACTION',
    DeleteDragonSaga,
  ),
  takeLatest<PutDragonAction['type'], typeof PutDragonSaga>(
    '@dragons/PUT_DRAGON_ACTION',
    PutDragonSaga,
  ),
  takeLatest<GetDragonsAction['type'], typeof GetDragonsSaga>(
    '@dragons/GET_DRAGONS_ACTION',
    GetDragonsSaga,
  ),
]);

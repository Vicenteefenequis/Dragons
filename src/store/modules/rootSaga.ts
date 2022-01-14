import { all } from '@redux-saga/core/effects';
import { dragonsSaga as dragons } from './dragons';

export default function* rootSaga(): any {
  return yield all([dragons]);
}

import { GetDragonsAction } from './types';
import { UpdateDragonAction, UpdateDragonPayload } from '.';

export function GetDragons(): GetDragonsAction {
  return {
    type: '@dragons/GET_DRAGONS_ACTION',
    payload: null,
  };
}

export function UpdateDragons(
  payload: UpdateDragonPayload,
): UpdateDragonAction {
  return {
    type: '@dragons/UPDATE_DRAGON_ACTION',
    payload,
  };
}

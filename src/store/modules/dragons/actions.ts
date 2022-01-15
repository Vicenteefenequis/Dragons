import {
  GetDragonsAction,
  UpdateDragonAction,
  UpdateDragonPayload,
} from './types';
import {
  CreateDragonAction,
  CreateDragonPayload,
  DeleteDragonAction,
  DeleteDragonPayload,
  PutDragonAction,
  PutDragonPayload,
} from '.';

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

export function CreateDragon(payload: CreateDragonPayload): CreateDragonAction {
  return {
    type: '@dragons/CREATE_DRAGON_ACTION',
    payload,
  };
}

export function DeleteDragon(payload: DeleteDragonPayload): DeleteDragonAction {
  return {
    type: '@dragons/DELETE_DRAGON_ACTION',
    payload,
  };
}
export function PutDragon(payload: PutDragonPayload): PutDragonAction {
  return {
    type: '@dragons/PUT_DRAGON_ACTION',
    payload,
  };
}

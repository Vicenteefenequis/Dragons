import { ActionReturnType } from '../rootTypes';

export type Dragon = {
  createdAt: string;
  name: string;
  type: string;
  histories: string[];
  id: string;
};

export type GetDragonsAction = ActionReturnType<
  '@dragons/GET_DRAGONS_ACTION',
  null
>;

export type UpdateDragonPayload = Dragon[];

export type UpdateDragonAction = ActionReturnType<
  '@dragons/UPDATE_DRAGON_ACTION',
  UpdateDragonPayload
>;

export type CreateDragonPayload = {
  name: string;
  type: string;
};
export type CreateDragonAction = ActionReturnType<
  '@dragons/CREATE_DRAGON_ACTION',
  CreateDragonPayload
>;

export type DeleteDragonPayload = {
  id: string;
};

export type DeleteDragonAction = ActionReturnType<
  '@dragons/DELETE_DRAGON_ACTION',
  DeleteDragonPayload
>;

export type DragonsActions =
  | GetDragonsAction
  | UpdateDragonAction
  | CreateDragonAction
  | DeleteDragonAction;

export type DragonsState = {
  dragons: Dragon[];
};

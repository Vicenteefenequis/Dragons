import { ActionReturnType } from '../rootTypes';

export type Dragon = {
  createdAt: Date;
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

export type DragonsActions = GetDragonsAction | UpdateDragonAction;

export type DragonsState = {
  dragons: Dragon[];
};

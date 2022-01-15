import produce from 'immer';
import { DragonsState, DragonsActions } from './types';

const INITIAL_STATE: DragonsState = {
  dragons: [],
};

export function dragonsReducer(
  state: DragonsState = INITIAL_STATE,
  action: DragonsActions,
): DragonsState {
  return produce(state, draft => {
    switch (action.type) {
      case '@dragons/UPDATE_DRAGON_ACTION': {
        const { payload } = action;

        draft.dragons = payload;
        break;
      }
      case '@dragons/DELETE_DRAGON_ACTION': {
        const { payload } = action;

        draft.dragons = draft.dragons.filter(
          dragon => dragon.id !== payload.id,
        );
        break;
      }
      case '@dragons/PUT_DRAGON_ACTION': {
        const { payload } = action;

        draft.dragons = draft.dragons.map(dragon => {
          if (dragon.id === payload.id) {
            return { ...dragon, ...payload };
          }
          return dragon;
        });
        break;
      }

      default:
    }
  });
}

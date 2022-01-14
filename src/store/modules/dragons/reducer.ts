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

      default:
    }
  });
}

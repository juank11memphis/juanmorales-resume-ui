import * as types from './skillsActionTypes';
import initialState from '../../core/initialState';

export default function skillsReducer(state = initialState.skills, action) {
  switch (action.type) {
    case types.LOAD_SKILLS_BEGIN:
      return Object.assign({}, state, {
        items: []
      });
    default:
      return state;
  }
}

import * as types from './skillsActionTypes';
import initialState from '../../core/initialState';

export default function skillsReducer(state = initialState.skills, action) {
  switch (action.type) {
    case types.LOAD_SKILLS_DATA_SUCCESS:
      return Object.assign({}, state, {
        data: action.skillsData
      });
    default:
      return state;
  }
}

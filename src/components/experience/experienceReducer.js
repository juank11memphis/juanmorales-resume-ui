import * as types from './experienceActionTypes';
import initialState from '../../core/initialState';

export default function experienceReducer(state = initialState.experience, action) {
  switch (action.type) {
    case types.LOAD_EXPERIENCE_DATA_SUCCESS:
      return Object.assign({}, state, action.experienceData);
    default:
      return state;
  }
}

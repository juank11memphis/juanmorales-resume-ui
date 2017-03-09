import * as types from './interestsActionTypes';
import initialState from '../../core/initialState';

export default function interestsReducer(state = initialState.interests, action) {
  switch (action.type) {
    case types.LOAD_INTERESTS_DATA_SUCCESS:
      return Object.assign({}, state, {
        data: action.interestsData
      });
    default:
      return state;
  }
}

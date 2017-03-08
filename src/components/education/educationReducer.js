import * as types from './educationActionTypes';
import initialState from '../../core/initialState';

export default function educationReducer(state = initialState.education, action) {
  switch (action.type) {
    case types.LOAD_EDUCATION_DATA_SUCCESS:
      return Object.assign({}, state, {
        data: action.educationData
      });
    default:
      return state;
  }
}

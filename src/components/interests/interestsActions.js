import * as types from './interestsActionTypes';
import {AjaxUtil} from '../../util';
import fetch from 'isomorphic-fetch';

function getFetchUrl(){
  return AjaxUtil.BASE_URL + 'interests';
}

export function loadInterestsData() {
  return (dispatch) => {
    return fetch(getFetchUrl())
      .then(response => response.json())
      .then(interestsData => dispatch(loadInterestsDataSuccess(interestsData.result)));
  };
}

export function loadInterestsDataSuccess(interestsData) {
  return {
    type: types.LOAD_INTERESTS_DATA_SUCCESS,
    interestsData
  };
}

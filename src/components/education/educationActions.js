import * as types from './educationActionTypes';
import {AjaxUtil} from '../../util';
import fetch from 'isomorphic-fetch';

function getFetchUrl(){
  return AjaxUtil.BASE_URL + 'education';
}

export function loadEducationData() {
  return (dispatch) => {
    return fetch(getFetchUrl())
      .then(response => response.json())
      .then(educationData => dispatch(loadEducationDataSuccess(educationData.result)));
  };
}

export function loadEducationDataSuccess(educationData) {
  return {
    type: types.LOAD_EDUCATION_DATA_SUCCESS,
    educationData
  };
}

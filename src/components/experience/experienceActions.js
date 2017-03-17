import * as types from './experienceActionTypes';
import {AjaxUtil} from '../../util';
import fetch from 'isomorphic-fetch';

function getFetchUrl(){
  return AjaxUtil.BASE_URL + 'experience';
}

export function loadExperienceData() {
  return (dispatch) => {
    return fetch(getFetchUrl())
      .then(response => response.json())
      .then(experienceData => dispatch(loadExperienceDataSuccess(experienceData.result)));
  };
}

export function loadExperienceDataSuccess(experienceData) {
  return {
    type: types.LOAD_EXPERIENCE_DATA_SUCCESS,
    experienceData
  };
}

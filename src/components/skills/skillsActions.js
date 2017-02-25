import * as types from './skillsActionTypes';
import {AjaxUtil} from '../../util';

function getFetchUrl(){
  return AjaxUtil.BASE_URL + 'skills';
}

export function loadSkillsData() {
  return (dispatch) => {
    return fetch(getFetchUrl())
      .then(response => response.json())
      .then(skillsData => dispatch(loadSkillsDataSuccess(skillsData.result[0])));
  };
}

export function loadSkillsDataSuccess(skillsData) {
  return {
    type: types.LOAD_SKILLS_DATA_SUCCESS,
    skillsData
  };
}

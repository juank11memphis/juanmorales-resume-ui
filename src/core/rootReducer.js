import {combineReducers} from 'redux';
import {headerReducer} from '../components/common/header';
import {skillsReducer} from '../components/skills';
import {experienceReducer} from '../components/experience';

const rootReducer = combineReducers({
  skills: skillsReducer,
  header: headerReducer,
  experience: experienceReducer
});

export default rootReducer;

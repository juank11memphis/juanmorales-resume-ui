import {combineReducers} from 'redux';
import {headerReducer} from '../components/common/header';
import {homeReducer} from '../components/home';
import {skillsReducer} from '../components/skills';
import {experienceReducer} from '../components/experience';

const rootReducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  skills: skillsReducer,
  experience: experienceReducer
});

export default rootReducer;

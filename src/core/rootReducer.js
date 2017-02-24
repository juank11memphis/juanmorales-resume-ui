import {combineReducers} from 'redux';
import {skillsReducer} from '../components/skills';
import {headerReducer} from '../components/common/header';

const rootReducer = combineReducers({
  skills: skillsReducer,
  header: headerReducer
});

export default rootReducer;

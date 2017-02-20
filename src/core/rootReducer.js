import {combineReducers} from 'redux';
import {skillsReducer} from '../components/skills';

const rootReducer = combineReducers({
  skills: skillsReducer
});

export default rootReducer;

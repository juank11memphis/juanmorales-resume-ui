import {combineReducers} from 'redux';
import {headerReducer} from '../components/common/header';
import {homeReducer} from '../components/home';
import {skillsReducer} from '../components/skills';
import {experienceReducer} from '../components/experience';
import {projectsReducer} from '../components/projects';
import {educationReducer} from '../components/education';
import {interestsReducer} from '../components/interests';
import {footerReducer} from '../components/common/footer';

const rootReducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  skills: skillsReducer,
  experience: experienceReducer,
  projects: projectsReducer,
  education: educationReducer,
  interests: interestsReducer,
  footer: footerReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import { reduxFields } from '../lib/redux-fields';
import { routerReducer as routing } from 'react-router-redux';

import device from '../device/reducer';
import intl from '../intl/reducer';
import ui from '../ui/reducer';
import users from '../users/reducer';
import advisors from '../advisors/reducer';
import login from '../login/reducer';
import projects from '../projects/reducer';

const appReducer = combineReducers({
  device,
  intl,
  reduxFields,
  routing,
  ui,
  users,
  advisors,
  login,
  projects
});

export default appReducer;

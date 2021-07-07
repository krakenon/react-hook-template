import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import Auth from './Auth';
import Common from './Common';
import Notes from './Notes';
import Settings from './Settings';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
    auth: Auth,
    notes: Notes,
    common: Common,
  });

export default createRootReducer;

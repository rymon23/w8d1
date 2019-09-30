import { combineReducers } from 'redux';
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  session: { id: null },
  errors: { session: ['Invalid Credentials'] }
});

export default entitiesReducer;
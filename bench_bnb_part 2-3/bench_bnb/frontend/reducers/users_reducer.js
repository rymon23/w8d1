import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_CURRENT_ERRORS
} from '../actions/session_actions';
import merge from "lodash/merge";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER: 
      return merge({}, {[action.user.id]: action.user });
    case LOGOUT_CURRENT_USER:
      const newState = merge({}, oldState);
      delete newState[action.user.id];
      return newState;
    default:
      return oldState;
  }
}

export default usersReducer;
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from "lodash/merge";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {

    case RECEIVE_CURRENT_USER: 
      return merge({}, {[action.user.id]: action.user });
      
    default:
      return oldState;
  }
}

export default usersReducer;
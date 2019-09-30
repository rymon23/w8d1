import * as APIUtil from  '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_CURRENT_ERRORS = "RECEIVE_CURRENT_ERRORS";


export const loginUser = (user) => dispatch => {
  return APIUtil.login(user).then(() => dispatch(receiveCurrentUser(user)))
};
export const signUp = (user) => dispatch => {
  return APIUtil.signup(user).then(() => dispatch(receiveCurrentUser(user)))
};
export const logoutUser = () => dispatch => {
  return APIUtil.logout().then((user) => dispatch(logoutCurrentUser()))
};

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})
const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
})
const recieveErrors = errors => ({
  type: RECEIVE_CURRENT_ERRORS,
  errors
})


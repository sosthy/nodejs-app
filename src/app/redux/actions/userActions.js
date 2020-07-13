import actionTypes from "./actionTypes";
import * as userService from "../../services/userService";

export function createUser(user) {
  return { type: actionTypes.CREATE_USER, user };
}

export function loadUsersSuccess(users) {
  return { type: actionTypes.LOAD_USERS_SUCCESS, users };
}

export function loadUsers() {
  return function (dispatch) {
    return userService
      .getUsers()
      .then(({ data: users }) => {
        dispatch(loadUsersSuccess(users));
      })
      .catch((error) => {
        throw error;
      });
  };
}

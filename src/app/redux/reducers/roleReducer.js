import actionTypes from "../actions/actionTypes";
import initialState from "../../../";

export default function roleReducer(state = initialState.roles, action) {
  switch (action.type) {
    case actionTypes.CREATE_ROLE:
      return [...state, { ...action.role }];
    case actionTypes.LOAD_ROLES_SUCCESS:
      return action.roles;
    default:
      return state;
  }
}

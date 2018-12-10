import { LOGIN, SIGNUP, LOGOUT } from "../actions/auth";

const initialState = {
  logged_in: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, logged_in: action.payload.logged_in };
    case LOGIN:
      return { ...state, logged_in: action.payload.logged_in };
    case LOGOUT:
      return { ...state, logged_in: action.payload.logged_in };
    default:
      return state;
  }
};

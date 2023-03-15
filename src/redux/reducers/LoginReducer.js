import { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/LoginAction";

const initialState = {
  login_loading: false,
  error: {},
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        login_loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login_loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        login_loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default login;
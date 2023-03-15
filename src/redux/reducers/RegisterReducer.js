import { REGISTER_BEGIN, REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/RegisterAction";

const initialState = {
  register_loading: false,
  error: {},
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_BEGIN:
      return {
        ...state,
        register_loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        register_loading: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        register_loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default register;
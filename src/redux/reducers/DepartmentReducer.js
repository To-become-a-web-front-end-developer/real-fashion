import { GET_DEPARTMENTS_BEGIN, GET_DEPARTMENTS_SUCCESS, GET_DEPARTMENTS_FAIL } from "../actions/DepartmentAction";

const initialState = {
  register_loading: false,
  departments: null,
  error: {},
};

const department = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEPARTMENTS_BEGIN:
      return {
        loading: true,
        error: null
      };
    case GET_DEPARTMENTS_SUCCESS:
      return {
        loading: false,
        departments: action.payload.data.departments
      };
    case GET_DEPARTMENTS_FAIL:
      return {
        loading: false,
        error: action.payload.error.response.data
      };
    default:
      return state;
  }
};
export default department;
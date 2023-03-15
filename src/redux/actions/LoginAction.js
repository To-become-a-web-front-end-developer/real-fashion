import {login} from "../../ServerRequest";

export const userLogin = (email, password) => async dispatch => {
    dispatch({
      type: LOGIN_BEGIN
    });
  
    try {
      const res = await login(email, password);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res
      });
  
      return res;
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: { error }
      });
  
      throw error;
    }
};
export const LOGIN_BEGIN = "LOGIN_BEGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const INSERT_TOKEN_SUCCESS = "INSERT_TOKEN_SUCCESS";
export const INSERT_TOKEN_FAIL = "INSERT_TOKEN_FAIL";
  
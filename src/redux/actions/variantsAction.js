import API from "../../axios/API";

export const getVariantsByProductId = productId => async dispatch => {
    dispatch({
        type: GET_VARIANTS_QUERY_BEGIN
    });
    return await API({
        method: "GET",
        url: `/variants?productId=${productId}`
    })
    .then(res => {
      dispatch({
        type: GET_VARIANTS_QUERY_SUCCESS,
        payload: res
      });
      return res;
    })
    .catch(error => {
      dispatch({
        type: GET_VARIANTS_QUERY_FAIL,
        payload: { error }
      });
      return error;
    });
};

export const GET_VARIANTS_QUERY_BEGIN = "GET_VARIANTS_QUERY_BEGIN";
export const GET_VARIANTS_QUERY_SUCCESS = "GET_VARIANTS_QUERY_SUCCESS";
export const GET_VARIANTS_QUERY_FAIL = "GET_VARIANTS_QUERY_FAIL";

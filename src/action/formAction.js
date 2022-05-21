import { GET_FORM, ADD_FORM, SET_LOADING, FORM_ERROR } from "./type";

export const getFormData = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("Formdata");
    const data = await res.json();
    dispatch({
      type: GET_FORM,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FORM_ERROR,
      payload: error.response.data,
    });
  }
};

// // Add Form
export const addForm = (formdata) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("Formdata", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_FORM,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FORM_ERROR,
      payload: error.response.data,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

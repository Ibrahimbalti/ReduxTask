import { GET_FORM, SET_LOADING, ADD_FORM, FORM_ERROR } from "../action/type";

const initialState = {
  formdata: null,
  loading: false,
  error: null,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORM:
      return {
        ...state,
        formdata: action.payload,
        loading: false,
      };
    case ADD_FORM:
      return {
        formdata: [...state.formdata, action.payload],
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FORM_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;

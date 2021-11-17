import { crimConst, createCriminal, deleteCriminal } from "./constants";

const initState = {
  criminals: [],
  loading: false,
  error: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case crimConst.CRIM_FETCH_REQUEST:
      state = { ...state, loading: true };
      break;

    case crimConst.CRIM_FETCH_SUCCESS:
      state = {
        ...state,
        criminals: action.payload.criminals,
        loading: false,
      };
      break;

    case crimConst.CRIM_FETCH_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;

    case createCriminal.CREATE_CRIMINAL_REQUEST:
      state = { ...state, loading: true };
      break;

    case createCriminal.CREATE_CRIMINAL_SUCCESS:
      const newCriminal = action.payload.criminal;
      const updatedCriminalList = [...state.criminals, newCriminal];

      state = {
        ...state,
        loading: false,
        criminals: updatedCriminalList,
      };
      break;

    case createCriminal.CREATE_CRIMINAL_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;

    case deleteCriminal.DELETE_CRIMINAL_REQUEST:
      state = { ...state, loading: true };
      break;

    case deleteCriminal.DELETE_CRIMINAL_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;

    case deleteCriminal.DELETE_CRIMINAL_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;
  }
  return state;
};

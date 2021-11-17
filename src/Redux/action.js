import axios from "./axios";
import { crimConst, createCriminal, deleteCriminal } from "./constants";

export const getAllCriminalData = () => {
  return async (dispatch) => {
    dispatch({
      type: crimConst.CRIM_FETCH_REQUEST,
    });

    const res = await axios.get(`/retrieve`);

    if (res.status == 200) {
      const { criminalList } = res.data;
      dispatch({
        type: crimConst.CRIM_FETCH_SUCCESS,
        payload: {
          criminals: criminalList,
        },
      });
    } else {
      dispatch({
        type: crimConst.CRIM_FETCH_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const createNewCriminal = (form) => {
  return async (dispatch) => {
    dispatch({
      type: createCriminal.CREATE_CRIMINAL_REQUEST,
    });

    try {
      const res = await axios.post(`/create`, form);
      if (res.status == 201) {
        dispatch({
          type: crimConst.CRIM_FETCH_SUCCESS,
          payload: { criminal: res.data.criminal },
        });
      } else {
        console.log("catch");
        dispatch({
          type: crimConst.CRIM_FETCH_FAILURE,
          payload: { error: res.data.error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteCriminalData = (id) => {
  return async (dispatch) => {
    dispatch({ type: deleteCriminal.DELETE_CRIMINAL_REQUEST });

    try {
      const res = await axios.post(`/delete`, { payload: id });
      console.log({ res });
      if (res.status == 201) {
        dispatch(getAllCriminalData());
        dispatch({ type: deleteCriminal.DELETE_CRIMINAL_SUCCESS });
      } else {
        console.log(error);
        const { error } = res.data;
        dispatch({ type: deleteCriminal.DELETE_CRIMINAL_FAILURE, error });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

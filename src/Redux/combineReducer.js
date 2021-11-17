import { combineReducers } from "redux";
import criminalReducer from "./reducer";

const reducer = combineReducers({ criminal: criminalReducer });

export default reducer;

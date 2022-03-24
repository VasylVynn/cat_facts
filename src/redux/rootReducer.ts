import { combineReducers } from "redux";
import factReducer from "./facts/factReducer";

const rootReducer = combineReducers({
    fact: factReducer
})

export default rootReducer
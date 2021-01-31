import { combineReducers } from "redux";
import tabReducer from "./tabs/tabReducer";

const rootReducer = combineReducers({
  tabs: tabReducer
})

export default rootReducer
import { combineReducers } from "redux";
import categoryReducer from "./categories/categoryReducer";
import tabReducer from "./tabs/tabReducer";
import formReducer from "./form/formReducer";

const rootReducer = combineReducers({
  tabs: tabReducer,
  categories: categoryReducer,
  form: formReducer
})

export default rootReducer
import { combineReducers } from "redux";
import categoryReducer from "./categories/categoryReducer";
import tabReducer from "./tabs/tabReducer";
import formReducer from "./form/formReducer";
import taskReducer from "./tasks/taskReducer";

const rootReducer = combineReducers({
  tabs: tabReducer,
  categories: categoryReducer,
  form: formReducer,
  tasks: taskReducer
})

export default rootReducer
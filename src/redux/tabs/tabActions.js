import { ADD_NEW_TAB } from "./tabTypes";

export const addNewTab = ({tabTitle}) => ({
  type: ADD_NEW_TAB,
  payload: {
    id: Date.now().toString(),
    tabTitle
  }
})
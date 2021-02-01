import { ADD_NEW_TAB } from "./tabTypes";

export const addNewTab = ({title}) => ({
  type: ADD_NEW_TAB,
  payload: {
    id: Date.now().toString(),
    title
  }
})

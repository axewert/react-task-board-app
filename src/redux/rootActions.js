import { TOGGLE_TABS } from "./rootTypes"

export const toggleTabs = (id) => {
  return {
    type: TOGGLE_TABS,
    payload: {id}
  }
}
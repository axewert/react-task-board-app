import { combineReducers } from "redux";
import { TOGGLE_TABS } from "./rootTypes";

export const initialState = {
  tabs: {
    route: 'tabs',
    current: [],
    active: '',
    newTabText:'Добавить новую вкладку',
    maxTabs: 4,
    placeholder:'Пока не создано ни одной вкладки'
  },
  categories: {
    route: 'categories',
    current: [],
  },
  tasks: {
    route: 'tasks',
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TABS:
      return {
        ...state,
        tabs: {
          ...state.tabs,
          active: action.payload.id
        }
      }
    default: 
      return state
  }
}

export default rootReducer
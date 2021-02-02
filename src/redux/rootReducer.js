import { combineReducers } from "redux";
import { TOGGLE_TABS } from "./rootTypes";

const initialState = {
  tabs: {
    route: 'tabs',
    current: ['t0', 't1'],
    active: 't0',
    't0': 
      {
        title: 'first',
        categories:['c0','c2']
      },
    't1': {title: 'second'}
  },
  categories: {
    route: 'categories',
    current: ['c0, c2'],
    'c0': 
      {
        title: 'fCat',
        tasks:['t2']
      },
    'c1': {title: 'sCat'},
    'c2': {title: 'tCat'},
  },
  tasks: {
    route: 'tasks',
    't0': {title: 'fTask'},
    't1': {title: 'sTask'},
    't2': {title: 'tTask'},
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
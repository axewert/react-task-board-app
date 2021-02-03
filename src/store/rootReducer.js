import { combineReducers } from "redux";
import { TOGGLE_TABS } from "./rootTypes";

export const initialState = {
  currentTabs: ['1', '2'],
  form: {
    simple: true,
    hidden: true
  },
  tabs: {
    route: 'tabs',
    active: '1',
    newTabText:'Добавить новую вкладку',
    maxTabs: 4,
    placeholder:'Пока не создано ни одной вкладки',
    '1': {
      title: 'tab1',
      categories: ['0', '1', '2', '3', '4']
    },
    '2': {
      title: 'tab2',
      categories: []
    }
  },
  categories: {
    route: 'categories',
    '0': {
      title: 'category1',
      tasks: ['0','1']
    },
    '1': {
      title: 'category2',
      tasks: ['2','3']
    },
    '2': {
      title: 'category2',
      tasks: ['2','3']
    },
    '3': {
      title: 'category2',
      tasks: ['2','3']
    },
    '4': {
      title: 'category2',
      tasks: ['2','3']
    },
  },
  tasks: {
    route: 'tasks',
    '0': {
      title: 'task1',
    },
    '1': {
      title: 'task2',
    },
    '2': {
      title: 'task3',
    },
    '3': {
      title: 'task4',
    },
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
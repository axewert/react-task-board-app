import { ADD_NEW_CATEGORY } from "./categoryTypes"

const initialState = {
  maxAmount: 5,
  items: {
    'todo': {title: 'to-do'},
    'des': {title: 'design'}
  }
}

const categoryReducer  = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_CATEGORY: 
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            title: action.payload.title
          }
        }
      }
    default:
      return state
  }
}

export default categoryReducer
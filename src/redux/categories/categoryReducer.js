import { ADD_NEW_CATEGORY, CLEAN_CATEGORY, NO_CATEGORIES } from "./categoryTypes"

const initialState = {
  maxAmount: 5,
  items: {},
  placeholder: false
}

const categoryReducer  = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_CATEGORY: 
      return {
        ...state,
        placeholder: false,
        items: {
          ...state.items,
          [action.payload.id]: {
            title: action.payload.title
          }
        }
      }
    case NO_CATEGORIES: 
      return {
        ...state,
        placeholder: true
      }
    case CLEAN_CATEGORY: 
      return {
        ...state,
        items: {
        }
      }
    default:
      return state
  }
}

export default categoryReducer